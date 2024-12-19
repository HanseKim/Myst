import React, { useEffect, useState } from "react";
import data from "./data/data.json";

type DetailProps = {
  id: number;
  Goback: () => void;
};

const Detail: React.FC<DetailProps> = ({ id, Goback }) => {
  const [dataList, setDataList] = useState<any[]>([]);
  const [idData, setIdData] = useState<any>(null);

  useEffect(() => {
    setDataList(data);
  }, []);

  useEffect(() => {
    const foundData = dataList.find((item) => item.id === id);
    setIdData(foundData);
  }, [dataList, id]);

  if (!idData) {
    return <div>스타일 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex">
      {Goback ? (
        <div className="flex flex-row w-full">
          <button
            className="w-[10%] h-16 m-1 bg-gray-200 rounded-full"
            onClick={Goback}
          >
            &lt;
          </button>
          <div className="w-[80%] items-center font-bold text-center p-4">
            {idData.name}
          </div>
        </div>
      ) : null}
      <div className="flex flex-row">
        <img className="w-[40%] h-[500px]" src={idData.img} alt={idData.name} />
        <div className="w-[40%] ml-4 text-center">
          <div className="m-4">탑: {idData.top}</div>
          <div className="m-4">바텀: {idData.bottom}</div>
          <div className="m-4">신발: {idData.shoes}</div>
          <div className="m-4">액세서리: {idData.accessories}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
