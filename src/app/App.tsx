import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { MainPage } from "../pages/MainPage";

export function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<MainPage />}></Route>
        <Route path={routes.country()} element={<PokemonPage />}></Route>
        <Route
          path={"*"}
          element={<Navigate to={routes.home} replace />}
        ></Route>
      </Routes>
    </>
  );
}
