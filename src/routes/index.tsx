import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/index";
import Cidades from "../pages/Cidades/index";
import QuemSomos from "../pages/QuemSomos/index";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/cidades" element={<Cidades />} />
      <Route path="/quemSomos" element={<QuemSomos />} />
    </Routes>
  );
};
