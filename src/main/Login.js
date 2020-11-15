import React from "react";
import {TextField, Button, Typography} from "@material-ui/core";
import "./Login.css";

function Login() {
    return (
        <div className="LoginContent">
            <div className="LeftLoginContent">
                <div className="LoginList">
                    <Typography variant="h4"> User </Typography>
                    <TextField id="UserName" type="text"
                               label="Name" style={{width: '75%'}}/>
                    <TextField id="UserPassword" type="text"
                               label="Password (Optional)" style={{width: '75%'}}/>
                    <TextField id="ChoiceID" type="number"
                               label="Choice ID" style={{width: '75%'}}/>
                    <div className="Login">
                        <Button variant="contained" id="Login" color="primary" size="large">Login User</Button>
                    </div>
                </div>
            </div>
            <div className="RightLoginContent">
                <div className="LoginList">
                    <Typography variant="h4"> Admin </Typography>
                    <TextField id="AdminName" type="text"
                               label="Name" style={{width: '75%'}}/>
                    <TextField id="AdminPassword" type="text"
                               label="Password (Optional)" style={{width: '75%'}}/>
                    <div className="Login">
                        <Button variant="contained" id="Login" color="primary" size="large">Login aDMIN</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;