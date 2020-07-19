import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Poker from "./components/Poker/Poker";
import JoinPoker from "./components/Join/JoinPoker";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={JoinPoker} />
      <Route path="/join" exact component={JoinPoker} />
      <Route path="/poker" component={Poker} />
    </Router>
  );
};

export default App;
