import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Pages/Home";
import { QueryCheck } from "../components/Pages/QueryCheck";
import { QueryCheckGraphQL } from "../components/Pages/QueryCheckGraphQL";
import { FetchCheck } from "../components/Pages/FetchCheck";
import { FetchSWRCheck } from "../components/Pages/FetchSWRCheck";
import { TestPage } from "../components/Pages/TestPage";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<QueryCheck />} />
        <Route path="/queryGraphQL" element={<QueryCheckGraphQL />} />
        <Route path="/fetch" element={<FetchCheck />} />
        <Route path="/fetchswr" element={<FetchSWRCheck />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
});
