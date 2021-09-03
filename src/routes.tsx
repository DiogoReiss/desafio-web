import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import home from "./pages/home/index";
import tableId from "./pages/tableID/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={home} />
      <Route path="/:tableTitle" component={tableId} />
    </BrowserRouter>
  );
}
