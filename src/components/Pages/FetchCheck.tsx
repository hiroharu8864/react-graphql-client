import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const FetchCheck: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <p>This is Fetch Check Page</p>
      <button onClick={onClickHome}>to home</button>
    </>
  );
});
