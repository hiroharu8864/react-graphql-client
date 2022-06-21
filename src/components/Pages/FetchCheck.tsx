import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Users } from "../Types/Users";

const fetchUsers = async () => {
  const resonse = await fetch("https://jsonplaceholder.typicode.com/users");
  return resonse.json();
};

export const FetchCheck: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const [users, setUsers] = useState<Array<Users>>([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <>
      <p>Fetchユーザ一覧</p>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <button onClick={onClickHome}>to home</button>
    </>
  );
});
