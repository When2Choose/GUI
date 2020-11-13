import React from "react";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./Menu.css";
import {Link} from "react-router-dom";

function Menu() {
    return (
        <div className="Menu">
            <AppBar id="MenuBar" position="static">
                <Toolbar id="toolbar" style={{display: "flex", justifyContent: "space-between"}}>
                    <div className="LeftMenu">
                        <Link to="/view">
                            <Button variant="contained" id="Scroll" color="default">Scroll Up</Button>
                        </Link>
                        <span style={{width: 10}}/>
                        <Link to="/create">
                            <Button variant="contained" id="Create" color="default">Create New Choice</Button>
                        </Link>
                    </div>
                    <div className="RightMenu">
                        <Link to="/login">
                            <Button variant="contained" id="Login" color="default">Login</Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Menu;
