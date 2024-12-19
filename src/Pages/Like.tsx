import React, { useState } from "react";
import Detail from "./Detail";

type LikeProps = {
  user: any;
  login: boolean;
  Golike: () => void;
};

const Like: React.FC<LikeProps> = ({ user, login, Golike }) => {
  if (login)
    return (
      <div>
        {user && user.mylike ? (
          <div>
            {user.mylike.map((id: number) => (
              <Detail id={id} Goback={Golike} />
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
  else {
    return <div>로그인하세요</div>;
  }
};

export default Like;
