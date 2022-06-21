import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickQueryCheck = useCallback(() => {
    navigate("/query");
  }, [navigate]);
  const onClickFetchCheck = useCallback(() => {
    navigate("/fetch");
  }, [navigate]);
  return (
    <>
      <p>This is Home Page</p>
      <button onClick={onClickQueryCheck}>to react query check</button>
      <br />
      <br />
      <button onClick={onClickFetchCheck}>to react fetch check</button>
    </>
  );
});
