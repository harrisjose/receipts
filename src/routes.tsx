import { Route } from "react-router-dom";
import { Router } from "../electron/lib/router";

import { Layout } from "./pages/Layout";

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Layout />} />
        </>
      }
    />
  );
}
