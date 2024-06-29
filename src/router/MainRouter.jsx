import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { Page404 } from "../pages/Page404";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1/*" element={<Page1Routes />} />
      <Route path="/page2/*" element={<Page2Routes />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
