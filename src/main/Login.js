import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Login.css";
import {Typography} from "@material-ui/core";

function Login() {
    return (
        <div className="LoginContent">
            <div className="LeftLoginContent">
                <div className="LoginList">
                    <Typography variant="h4"> User </Typography>
                </div>
                <div className="LoginList">
                    <TextField id="UserName" type="text"
                               label="Name" style={{width: '75%'}} />
                </div>
                <div className="LoginList">
                    <TextField id="UserPassword" type="text"
                               label="Password (Optional)" style={{width: '75%'}} />
                </div>
                <div className="LoginList">
                    <TextField id="ChoiceID" type="number"
                               label="Choice ID" style={{width: '75%'}} />
                </div>
            </div>
            <div className="RightLoginContent">
                <div className="LoginList">
                    <Typography variant="h4"> Admin </Typography>
                </div>
                <div className="LoginList">
                    <TextField id="AdminName" type="text"
                               label="Name" style={{width: '75%'}} />
                </div>
                <div className="LoginList">
                    <TextField id="AdminPassword" type="text"
                               label="Password (Optional)" style={{width: '75%'}} />
                </div>
            </div>
            <div className="Login">
                <Button variant="contained" id="Login" color="primary" size="large">Login</Button>
            </div>
        </div>
    );
}

export default Login;