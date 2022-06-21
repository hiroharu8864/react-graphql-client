import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const FetchCheck: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const fetchUsers = async () => {
    const resonse = await fetch("https://jsonplaceholder.typicode.com/users");
    return resonse.json();
  };

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
