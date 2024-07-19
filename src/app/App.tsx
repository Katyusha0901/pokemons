import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { MainPage } from "../pages/MainPage";
import { Navigate } from "react-router-dom";
import { PokemonPage } from "../pages/PokemonPage";

export function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<MainPage />}></Route>
        <Route path={routes.pokemon()} element={<PokemonPage />}></Route>
        <Route
          path={"*"}
          element={<Navigate to={routes.home} replace />}
        ></Route>
      </Routes>
    </>
  );
}
