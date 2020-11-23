import React from "react";
import {
    Button,
    Typography,
    Grid,
    TextField,
    CardContent,
    Card
} from "@material-ui/core";
import "./Login.css";

function Login() {
    const handleUserLogin = () => {
        let name = document.getElementById("UserName").checkValidity();
        let choiceID = document.getElementById("ChoiceID").checkValidity();
        if (name && choiceID) {
            var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
            const postTo = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/loginRequest/userLogin";
            xmlhttp.open("POST", postTo, true);
            xmlhttp.responseType = "json";
            xmlhttp.onloadend = function () {
                console.log("Response: " + JSON.stringify(xmlhttp.response));
                if (this.readyState === XMLHttpRequest.DONE && this.response.statusCode === 200) {
                    choiceID = document.getElementById("ChoiceID").value;
                    localStorage.setItem("user", document.getElementById("UserName").value);
                    localStorage.setItem("choiceID", choiceID);
                    window.location.href="#/view/";
                } else if (this.response.statusCode === 400) {
                    alert("ERROR: "+this.response.response);
                }
            };

            const data = {
                name: document.getElementById("UserName").value,
                password: document.getElementById("UserPassword").value,
                choiceId: document.getElementById("ChoiceID").value
            }
            console.log("local: " + JSON.stringify(data));
            xmlhttp.send(JSON.stringify(data));
        }
    };

    return (
        <div className="LoginContent">
            <Typography variant="h2" style={{paddingBottom: "1%"}}> User Login </Typography>
            <Card variant="outlined">
                <CardContent>
                    <form className="LoginUser" onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        <Grid container direction="column" spacing={2} style={{padding: "1%"}}>
                            <Grid item>
                                <TextField required variant="outlined" id="UserName" placeholder="Name*"
                                           className="Input"/>
                            </Grid>
                            <Grid item>
                                <TextField variant="outlined" id="UserPassword" type="password"
                                           placeholder="Password (Optional)" className="Input"/>
                            </Grid>
                            <Grid item>
                                <TextField required variant="outlined" id="ChoiceID" type="text"
                                           placeholder="Choice ID*"
                                           className="Input"/>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" id="Login" color="primary" size="large"
                                        onClick={handleUserLogin} type="submit">Login User</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login;