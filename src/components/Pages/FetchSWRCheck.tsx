import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

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

const fetcher = async (url: string): Promise<boolean | null> => {
  const resonse = await fetch(url);
  return resonse.json();
};

const ResultComponent = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  console.log(data);
  console.log(error);

  const [users, setUsers] = useState<Array<Users>>([]);

  useEffect(() => {
    fetcher().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export const FetchSWRCheck: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <ResultComponent />
      <button onClick={onClickHome}>to home</button>
    </>
  );
});
