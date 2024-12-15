import React, { useState } from "react";
import "./CSS/Home.css";
import DataListComponent from "./DataListComponent";
import Detail from "./Detail";

type HomeProps = {
  detail: boolean;
  Handledetail: () => void;
  id: number;
  Gohome: () => void;
  Godetail: (id: number) => void;
};

const Home: React.FC<HomeProps> = ({ id, detail, Godetail }) => {
  return (
    <div>
      {detail ? ( // null 체크
        <Detail id={id} /> // id가 null이 아닐 때 Detail 컴포넌트 렌더링
      ) : (
        <div className="container">
          <DataListComponent Godetail={Godetail} />
        </div>
      )}
    </div>
  );
};

export default Home;
