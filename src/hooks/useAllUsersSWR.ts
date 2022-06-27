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

export const useAllUsersSWR = () => {
  const fetcher = async (url: string): Promise<boolean | null> => {
    const resonse = await fetch(url);
    return resonse.json();
  };

  const { data, error } = useSWR<Array<Users>>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  return { data, error };
};
