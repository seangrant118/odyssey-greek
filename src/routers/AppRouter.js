import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import Alphabet from '../components/Alphabet';
import Flashcards from "../components/Flashcards";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/alphabet" component={Alphabet} />
        <Route path="/flashcards" component={Flashcards} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
