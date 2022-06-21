import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Pages/Home";
import { QueryCheck } from "../components/Pages/QuetyCheck";
import { FetchCheck } from "../components/Pages/FetchCheck";
import { TestPage } from "../components/Pages/TestPage";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<QueryCheck />} />
        <Route path="/fetch" element={<FetchCheck />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
});
