import React from "react";
import {Button, Typography, Input, FormControl, Grid, Paper} from "@material-ui/core";
import {Link} from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <div className="LoginContent">
            <div className="LeftLoginContent">
                <div className="LoginList">
                    <form className="LoginUser">
                        <Typography variant="h4"> User </Typography>
                        <Input required id="UserName" placeholder="Name" style={{width: '75%', padding: '5px'}}/>
                        <Input id="UserPassword" type="password"
                               placeholder="Password (Optional)" style={{width: '75%', padding: '5px'}}/>
                        <Input required id="ChoiceID" type="number"
                               placeholder="Choice ID" style={{width: '75%', padding: '5px'}}/>
                        <div className="Login">
                            <Button variant="contained" id="Login" color="primary" size="large" type="submit">Login
                                User</Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="RightLoginContent">
                <div className="LoginList">
                    <form className="loginAdmin">
                        <Typography variant="h4"> Admin </Typography>
                        <Input required id="AdminName" placeholder="Name" style={{width: '75%', padding: '5px'}}/>
                        <Input required id="AdminPassword" type="password"
                               placeholder="Password (Optional)" style={{width: '75%', padding: '5px'}}/>
                        <div className="Login">
                            <Button variant="contained" id="Login" color="primary" size="large" type="submit">Login
                                Admin</Button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;