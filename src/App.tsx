import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "./router/Router";
import "./styles.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevTools initialIsOpen={false} /> */}
      <Router />
    </QueryClientProvider>
  );
}
