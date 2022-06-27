import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAllUsersSWR } from "../../hooks/useAllUsersSWR";

export const FetchSWRCheck: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const { data } = useAllUsersSWR();
  console.log(data);

  return (
    <>
      <p>Fetch Users</p>
      <div>
        {data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
        <button onClick={onClickHome}>to home</button>
      </div>
    </>
  );
});
