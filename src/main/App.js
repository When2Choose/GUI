import React from "react";

import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";

import './App.css';
import CreateChoice from "./CreateChoice";
import Menu from "./Menu";
import Login from "./Login";


function App() {
    document.title = "Choice App";
  return (
    <div className="App">
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route path="/create">
                    <CreateChoice/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
