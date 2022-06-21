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

  const { data, isLoading } = useQuery("users", fetchUsers);
  console.log(data);
  console.log(isLoading);

  return (
    <>
      <p>Fetchユーザ一覧</p>
      <div>
        {data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <button onClick={onClickHome}>to home</button>
    </>
  );
});
