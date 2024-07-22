import { Routes, Route } from "react-router-dom";
import { routes } from "./app/config/routes";
import { MainPage } from "./pages/main/ui/MainPage";
import { Navigate } from "react-router-dom";
import { PokemonPage } from "./pages/pokemon/ui/PokemonPage";

export const App: React.FC = () => (
  <Routes>
    <Route path={routes.home} element={<MainPage />} />
    <Route path={routes.pokemon()} element={<PokemonPage />} />
    <Route path={"*"} element={<Navigate to={routes.home} replace />} />
  </Routes>
);
