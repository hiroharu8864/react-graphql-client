import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Pages/Home";
import { QueryCheck } from "../components/Pages/QuetyCheck";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<QueryCheck />} />
      </Routes>
    </BrowserRouter>
  );
});
