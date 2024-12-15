import React, { useState, useEffect } from "react";
import data from "./data/data.json";
import Detail from "./Detail";

type RankProps = {
  detail: boolean;
  Handledetail: () => void;
  id: number;
  Gohome: () => void;
  Godetail: (id: number) => void;
};

const Rank: React.FC<RankProps> = ({ id, detail, Godetail }) => {
  const [dataList, setDataList] = useState<any[]>(data);
  useEffect(() => {
    let sortedData;
    sortedData = sortedData = [...data].sort((a, b) => a.rank - b.rank); // id 기준 정렬
    setDataList(sortedData);
  }, []);

  return (
    <div>
      {detail ? ( // null 체크
        <Detail id={id} /> // id가 null이 아닐 때 Detail 컴포넌트 렌더링
      ) : (
        <div className="container">
          <div className="button-container">
            <ul className="flex flex-wrap items-center justify-center">
              {dataList.map((item) => (
                <li
                  key={item.id}
                  className="flex-col slide list"
                  onClick={() => Godetail(item.id)} // 클릭 시 Godetail 호출
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
                    <div>
                      <div>{item.top}</div>
                      <div>{item.bottom}</div>
                      <div>{item.shoes}</div>
                      <div>{item.accessories}</div>
                      <div>{item.date}</div>
                      <div>{item.price / 10000}만원</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rank;

/**
 * 
    
 */
