import { Route } from "react-router-dom";
import { Router } from "../electron/lib/router";

import { Accounts } from "./pages/Accounts";
import { Collections } from "./pages/Collections";
import { Filters } from "./pages/Filters";
import { Layout } from "./pages/Layout";
import { Settings } from "./pages/Settings";

export function AppRoutes() {
  return (
    <Router
      main={
        <Route path="/" element={<Layout />}>
          <Route index element={<Collections />} />
          <Route path="filters" element={<Filters />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      }
      _providerProps={{
        future: {
          v7_startTransition: true,
        },
      }}
    />
  );
}
