import React, { useEffect, useState } from "react";
import data from "./data/data.json";

type DetailProps = {
  id: number;
};

const Detail: React.FC<DetailProps> = ({ id }) => {
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
    <div>
      <h2>{idData.name}</h2>
      <img src={idData.img} alt={idData.name} />
      <div>탑: {idData.top}</div>
      <div>바텀: {idData.bottom}</div>
      <div>신발: {idData.shoes}</div>
      <div>액세서리: {idData.accessories}</div>
    </div>
  );
};

export default Detail;
