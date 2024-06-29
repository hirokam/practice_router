import { Route, Routes } from "react-router-dom";

import { Page1 } from "../pages/Page1";
import { Page1DetailA } from "../pages/Page1DetailA";
import { Page1DetailB } from "../pages/Page1DetailB";
import { Page404 } from "../pages/Page404";

export const Page1Routes = () => {
  return (
    <Routes>
      <Route index element={<Page1 />} />
      <Route path="detail_a" element={<Page1DetailA />} />
      <Route path="detail_b" element={<Page1DetailB />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
