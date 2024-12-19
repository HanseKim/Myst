import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Head/Header";
import Home from "./Pages/Home";
import Rank from "./Pages/Rank";
import Stylist from "./Pages/Stylist";
import Like from "./Pages/Like";
import Mypage from "./Pages/Mypage";

const App: React.FC = () => {
  const [login, setlog] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null); // 현재 사용자 상태 추가
  const [id, setId] = useState<number>(0); // null로 초기화
  const [stylistid, setStlistid] = useState<number>(0);
  const [detail, setDetail] = useState(0); //detail -> 0: 기본 , 1:스타일 , 2: 스타일리스트
  const [page, setpage] = useState("home");

  const Login = (user: any) => {
    setlog(true);
    setCurrentUser(user);
    console.log("로그인됐습니다");
  };
  const Logout = () => {
    setlog(false);
    console.log("로그아웃됐습니다");
  };
  //id : 아이디 값 / detail -> 0: 기본 , 1:스타일 , 2: 스타일리스트
  const Godetail = (id: number, detail: number) => {
    setId(id);
    setDetail(detail);
  };
  const Handledetail = () => {
    setDetail(0);
  };
  const Gohome = () => {
    setpage("home");
    Handledetail();
  };
  const GoRank = () => {
    setpage("rank");
    Handledetail();
  };
  const GoStylist = () => {
    setpage("stylist");
    Handledetail();
  };
  const Golike = () => {
    setpage("like");
    Handledetail();
  };
  const Gomypage = (user: any) => {
    setpage("mypage");
    setCurrentUser(user);
    Handledetail();
  };

  useEffect(() => {
    console.log("현재 페이지는 " + page + "입니다.");
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <Home
            Gohome={Gohome}
            id={id}
            stylistid={stylistid}
            detail={detail}
            Godetail={Godetail}
            GoStylist={GoStylist}
          />
        );
      case "rank":
        return (
          <Rank
            Gohome={Gohome}
            id={id}
            detail={detail}
            Godetail={Godetail}
            Handledetail={Handledetail}
            Goback={GoRank}
          />
        );
      case "stylist":
        return (
          <Stylist detail={detail} Godetail={Godetail} GoStylist={GoStylist} />
        );
      case "like":
        return <Like user={currentUser} login={login} />;
      case "mypage":
        return <Mypage user={currentUser} />;
      default:
        return (
          <Home
            Gohome={Gohome}
            id={id}
            stylistid={stylistid}
            detail={detail}
            Godetail={Godetail}
            GoStylist={GoStylist}
          />
        );
    }
  };

  return (
    <div>
      <Header
        login={login}
        Login={Login}
        Logout={Logout}
        Gohome={Gohome}
        Gorank={GoRank}
        GoStylist={GoStylist}
        Golike={Golike}
        Gomypage={Gomypage}
      />
      {renderPage()}
    </div>
  );
};

export default App;
