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

  const clickLogin = () => {
    setlog((prev) => !prev);
    const log = login ? "아웃" : "인";
    console.log("로그" + log + " 됐습니다.");
  };

  const [currentUser, setCurrentUser] = useState<any>(null); // 현재 사용자 상태 추가
  const [id, setId] = useState<number>(0); // null로 초기화
  const [detail, setDetail] = useState(false);

  const Godetail = (id: number) => {
    setId(id);
    setDetail(true);
  };
  const Handledetail = () => {
    setDetail(false);
  };

  const [page, setpage] = useState("home");
  const Gohome = () => {
    setpage("home");
    Handledetail();
  };
  const GoRank = () => {
    setpage("rank");
  };
  const GoStylist = () => {
    setpage("stylist");
  };
  const Golike = () => {
    setpage("like");
  };
  const Gomypage = (user: any) => {
    setpage("mypage");
    setCurrentUser(user);
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
            detail={detail}
            Godetail={Godetail}
            Handledetail={Handledetail}
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
          />
        );
      case "stylist":
        return <Stylist />;
      case "like":
        return <Like user={currentUser} />;
      case "mypage":
        return <Mypage user={currentUser} />;
      default:
        return (
          <Home
            Gohome={Gohome}
            id={id}
            detail={detail}
            Godetail={Godetail}
            Handledetail={Handledetail}
          />
        );
    }
  };

  return (
    <div>
      <Header
        login={login}
        clickLogin={clickLogin}
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
