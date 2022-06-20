import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickQueryCheck = useCallback(() => {
    navigate("/query");
  }, [navigate]);
  return (
    <>
      <p>This is Home Page</p>
      <button onClick={onClickQueryCheck}>to query check</button>
    </>
  );
});
