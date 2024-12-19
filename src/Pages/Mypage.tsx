import React, { useEffect, useState } from "react";

type MypageProps = {
  user: any;
};

const Mypage: React.FC<MypageProps> = ({ user }) => {
  if (user)
    return (
      <div>
        <div>이름 : {user.name}</div>
        <div>배송주소 : {user.address}</div>
      </div>
    );
  return <div>로그인하세요</div>;
};

export default Mypage;
