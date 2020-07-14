import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Chat from "./components/Chat/Chat";
import JoinChat from "./components/Join/JoinChat";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={JoinChat} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
