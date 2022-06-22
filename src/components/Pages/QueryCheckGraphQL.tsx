import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const QueryCheckGraphQL: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <p>This is QueryCheckGraphQLPage</p>
      <button onClick={onClickHome}>to home</button>
    </>
  );
});
