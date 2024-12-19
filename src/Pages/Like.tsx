import React, { useState } from "react";
import Detail from "./Detail";

type LikeProps = {
  user: any;
  login: boolean;
};

const Like: React.FC<LikeProps> = ({ user, login }) => {
  return (
    <div>
      {user && user.mylike ? (
        <div>
          {user.mylike.map((id: number) => (
            <div key={id} className="border-2 border-black rounded-[40px] m-8">
              <Detail id={id} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {login ? (
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
