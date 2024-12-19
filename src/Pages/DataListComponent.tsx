import React, { useState, useEffect } from "react";
import data from "./data/data.json";

type DataListComponentProps = {
  Godetail: (id: number, detail: number) => void;
};

const DataListComponent: React.FC<DataListComponentProps> = ({ Godetail }) => {
  const [dataList, setDataList] = useState<any[]>(data);
  const [sort, setSort] = useState<number>(0);

  const handleSort = (num: number) => {
    setSort(num);
  };

  useEffect(() => {
    let sortedData;
    switch (sort) {
      case 0: // 스타일id
        sortedData = [...data].sort((a, b) => a.id - b.id); // id 기준 정렬
        break;
      case 1: // 최신순 (날짜 기준 정렬)
        sortedData = [...data].sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
      case 2: // 가격 오름차순
        sortedData = [...data].sort((a, b) => a.price - b.price); // id 기준 정렬
        break;
      default:
        sortedData = data;
    }
    setDataList(sortedData);
  }, [sort]);

  return (
    <div className="flex-col justify-center">
      <div className="flex justify-center mb-4">
        <button onClick={() => handleSort(0)} className="mx-2">
          스타일
        </button>
        <button onClick={() => handleSort(1)} className="mx-2">
          최신순
        </button>
        <button onClick={() => handleSort(2)} className="mx-2">
          가격 오름차순
        </button>
      </div>
      <div className="button-container">
        <ul className="flex flex-wrap items-center justify-center">
          {dataList.map((item) => (
            <li
              key={item.id}
              className="flex-col slide list"
              onClick={() => Godetail(item.id, 1)} // 클릭 시 Godetail 호출
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
  );
};

export default DataListComponent;
