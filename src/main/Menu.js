import React from "react";
import {AppBar, Toolbar, Button} from "@material-ui/core"
import "./Menu.css";
import {Link} from "react-router-dom";

function Menu() {
    return (
        <div className="Menu">
            <AppBar id="MenuBar" >
                <Toolbar id="toolbar" style={{display: "flex", justifyContent: "space-between"}}>
                    <div className="LeftMenu">
                        <span style={{width: 10}}/>
                        <Link to="/create">
                            <Button variant="contained" id="Create" color="default">Create New Choice</Button>
                        </Link>
                    </div>
                    <div className="RightMenu">
                        <Link to="/">
                            <Button variant="contained" id="Login" color="default">Login</Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Menu;
