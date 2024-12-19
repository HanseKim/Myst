import React, { useEffect, useState } from "react";
import stylistdata from "./data/stylist.json";

type StylistDetailProps = {
  stylistid: number;
  Goback?: () => void;
};

const StylistDetail: React.FC<StylistDetailProps> = ({ Goback, stylistid }) => {
  const [stData, setStData] = useState<any>(null);

  useEffect(() => {
    // 스타일리스트 데이터에서 stylistid에 해당하는 아이템 찾기
    const foundData = stylistdata.find((item) => item.stylistid === stylistid);
    setStData(foundData);
  }, [stylistid]); // stylistid가 변경될 때마다 실행

  // stData가 null일 경우 메시지 표시
  if (!stData) {
    return <div>스타일리스트 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex">
      {Goback && (
        <div className="flex flex-row w-full">
          <button
            className="w-[10%] h-16 m-1 bg-gray-200 rounded-full"
            onClick={Goback}
            aria-label="뒤로가기" // 접근성 향상
          >
            &lt;
          </button>
          <div className="w-[80%] items-center font-bold text-center p-4">
            {stData.name}
          </div>
        </div>
      )}
      <div className="flex flex-row">
        <img className="w-[40%] h-[500px]" src={stData.img} alt={stData.name} />
        <div className="w-[40%] ml-4 text-center">stylist detail</div>
      </div>
    </div>
  );
};

export default StylistDetail;
