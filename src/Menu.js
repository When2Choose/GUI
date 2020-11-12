import React from "react";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./Menu.css";

function Menu() {
    return (
        <div className="Menu">
            <AppBar id="MenuBar" position="static">
                <Toolbar id="toolbar" style={{display:"flex", justifyContent:"space-between"}}>
                    <div className="LeftMenu">

                        <Button variant="contained" id="Scroll" color="default">Scroll Up </Button>
                        <span style={{width: 10}}/>
                        <Button variant="contained" id="Create" color="default">Create New Choice</Button>
                    </div>
                    <div className="RightMenu">
                        <Button variant="contained" id="Create" color="default">FIRST NAME HERE</Button>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Menu;
