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
import ViewChoice from "./ViewChoice";
import {ThemeProvider} from "@material-ui/styles";
import {useMediaQuery, createMuiTheme, CssBaseline} from "@material-ui/core";


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
            <CssBaseline />
            <div className="App">
                <BrowserRouter>
                    <Menu/>
                    <Switch>
                        <Route path="/view">
                            <ViewChoice/>
                        </Route>
                        <Route path="/create">
                            <CreateChoice/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
