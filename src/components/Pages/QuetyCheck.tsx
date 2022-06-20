import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevTools } from "react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

export const QueryCheck: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <p>This is QueryCheck Page</p>
      <button onClick={onClickHome}>to home</button>
    </>
    // <QueryClientProvider client={queryClient}>
    //   <ReactQueryDevTools initialIsOpen={false} />
    // </QueryClientProvider>
  );
});
