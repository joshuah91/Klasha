import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Klasha from "../src/Pages/Klasha";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Klasha} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
