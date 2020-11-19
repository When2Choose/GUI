import React from "react";

import {
    Switch,
    Route,
    HashRouter
} from "react-router-dom";
import {
    useMediaQuery,
    createMuiTheme,
    CssBaseline
} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

import './App.css';
import CreateChoice from "./CreateChoice";
import Menu from "./Menu";
import Login from "./Login";
import ViewChoice from "./ViewChoice";


import CompleteChoice from "./CompleteChoice";


function App() {
    document.title = "Choice App";
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="App">
                <HashRouter>
                    <Menu/>
                    <Switch>
                        <Route path="/view">
                            <ViewChoice/>
                        </Route>
                        <Route path="/create">
                            <CreateChoice/>
                        </Route>
                        <Route path="/complete">
                            <CompleteChoice/>
                        </Route>
                        <Route path="/">
                            <Login/>
                        </Route>
                    </Switch>
                </HashRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
