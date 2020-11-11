import React from "react";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function Menu() {
    return (
        <div className="Menu">
            <AppBar id="MenuBar" position="static">
                <Toolbar id="toolbar">
                    <Button variant="zoomUp" id="Create" color="primary">Zoom Up </Button>
                    <Button variant="newChoice" id="Create" color="primary">Create New Choice</Button>
                    <p> ID </p>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Menu;
