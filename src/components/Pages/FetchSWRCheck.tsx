import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const FetchSWRCheck: FC = memo(() => {
  const result = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);
  console.log(result);

  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <p>Test Page</p>
      <button onClick={onClickHome}>to home</button>
    </>
  );
});
