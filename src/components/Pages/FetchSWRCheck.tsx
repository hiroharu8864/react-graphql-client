import { FC, memo } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const FetchSWRCheck: FC = memo(() => {
  const result = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);
  console.log(result);

  return (
    <>
      <p>Test Page</p>
    </>
  );
});
