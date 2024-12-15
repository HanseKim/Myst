import React, { useState } from "react";
import Detail from "./Detail";

type LikeProps = {
  user: any;
};

const Like: React.FC<LikeProps> = ({ user }) => {
  return (
    <div>
      {user && user.mylike ? (
        <div>
          {user.mylike.map((id: number) => (
            <Detail key={id} id={id} />
          ))}
        </div>
      ) : (
        <div>
          {user ? (
            <div>사용자 좋아요가 없습니다.</div>
          ) : (
            <div>로그인 하세요.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Like;
