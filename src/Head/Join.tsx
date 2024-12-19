import React, { useEffect, useState } from "react";
import data from "../Pages/data/login.json";

type User = {
  id: string;
  password: string;
  name?: string;
  address?: string;
  mylike?: number[];
};
type JoinProps = {
  onClose: () => void;
  openLogin: () => void;
};

const Join: React.FC<JoinProps> = ({ onClose, openLogin }) => {
  const [datalist, setDataList] = useState<User[]>([]);
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = () => {
    if (id && password) {
      const newUser: User = { id, password };
      const updatedDataList = [...datalist, newUser];

      setDataList(updatedDataList);

      // 로컬 스토리지에 저장
      localStorage.setItem("userData", JSON.stringify(updatedDataList));

      // 입력 필드 초기화
      setId("");
      setPassword("");
      setErrorMessage("");
      console.log("사용자 추가:", newUser);
      alert("회원가입 되었습니다!!");
      onClose();
    } else {
      setErrorMessage(
        "회원가입 실패: 사용자 이름이나 비밀번호가 잘못되었습니다."
      );
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setDataList(JSON.parse(storedData));
    } else {
      setDataList(data); // 초기 데이터 설정
    }
  }, []);

  return (
    <div className="flex">
      <div className="text-center w-[100%] fond-bold">회원가입</div>
      <input
        type="text"
        placeholder="사용자 이름"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleLogin(); // 엔터 키를 누르면 로그인 실행
          }
        }}
      />
      <div className="flex flex-col">
        <button className="bg-gray-300 rounded-xl" onClick={handleLogin}>
          가입하기
        </button>
        <button className="bg-green-50 rounded-xl" onClick={openLogin}>
          돌아가기
        </button>
      </div>

      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Join;
