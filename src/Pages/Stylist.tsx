import React, { useEffect, useState } from "react";
import data from "./data/stylist.json";
import StylistDetail from "./StylistDetail";

type StylistProps = {
  detail: number;
  Godetail: (id: number, detail: number) => void;
  GoStylist: () => void;
};

const Stylist: React.FC<StylistProps> = ({ detail, Godetail, GoStylist }) => {
  const [stylist, setStylist] = useState<any[]>([]);
  const [stylistid, setStlistid] = useState(0);

  // 의존성 배열 추가, 마운트 시 데이터 설정
  useEffect(() => {
    setStylist(data);
  }, []);

  const handleStid = (id: number) => {
    setStlistid(id);
    Godetail(id, 2); // detail 2: Detail에서 스타일리스트 아이디로 검색
  };

  const renderPage = () => {
    if (detail === 0) {
      return (
        <div className="button-container">
          <ul className="flex flex-wrap items-center justify-center">
            {stylist.map((item) => (
              <li
                key={item.stylistid}
                className="flex-col slide list"
                onClick={() => handleStid(item.stylistid)} // 클릭 시 Godetail 호출
              >
                <div className="font-bold text-center">{item.name}</div>
                <div className="flex">
                  <div>
                    <img
                      className="w-64 h-[400px]"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <StylistDetail stylistid={stylistid} Goback={GoStylist} />;
    }
  };

  return <div>{renderPage()}</div>;
};

export default Stylist;
