import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const fetchUsers = async () => {
  const resonse = await fetch("https://jsonplaceholder.typicode.com/users");
  return resonse.json();
};

export const QueryCheck: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // const result = useQuery("users", fetchUsers);
  // console.log(result);

  const { data, error, isError, isLoading } = useQuery("users", fetchUsers);

  return (
    <>
      <p>Fetchユーザ一覧</p>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <div>
            {data.map((user) => (
              <div key={user.id}>{user.name}</div>
            ))}
          </div>
          <button onClick={onClickHome}>to home</button>
        </>
      )}
      {isError && <span>Error: {error.message}</span>}
    </>
  );
});
