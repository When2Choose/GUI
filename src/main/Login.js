import React from "react";
import {
    Button,
    Typography,
    Grid,
    Paper,
    TextField
} from "@material-ui/core";
import "./Login.css";

function Login() {
    return (
        <div className="LoginContent">
            <Grid container spacing={3} justify="center" direction="row" className="LoginGrid">
                <Grid item xs={6}>
                    <Grid container direction="column" spacing={2} className="LoginForm" justify="center">
                        <Grid item>
                            <Paper variant="elevation" elevation={2} className="Paper">
                                <form className="LoginUser">
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <Typography variant="h4"> User </Typography>
                                        </Grid>
                                        <Grid item className="LoginInputs">
                                            <Grid container direction="column" spacing={2}>
                                                <Grid item>
                                                    <TextField required variant="outlined" id="UserName" placeholder="Name" className="Input"/>
                                                </Grid>
                                                <Grid item>
                                                    <TextField variant="outlined" id="UserPassword" type="password"
                                                           placeholder="Password (Optional)"
                                                           className="Input"/>
                                                </Grid>
                                                <Grid item>
                                                    <TextField required variant="outlined" id="ChoiceID" type="number"
                                                           placeholder="Choice ID" className="Input"/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" id="Login" color="primary" size="large"
                                                    type="submit">Login User</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="column" spacing={2} className="LoginForm" justify="center">
                        <Grid item>
                            <Paper variant="elevation" elevation={2} className="Paper">
                                <form className="LoginAdmin">
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <Typography variant="h4"> Admin </Typography>
                                        </Grid>
                                        <Grid item className="LoginInputs">
                                            <Grid container direction="column" spacing={2}>
                                                <Grid item>
                                                    <TextField required variant="outlined" id="AdminName" placeholder="Name"
                                                           className="Input"/>
                                                </Grid>
                                                <Grid item>
                                                    <TextField required variant="outlined" id="AdminPassword" type="password"
                                                           placeholder="Password (Optional)"
                                                           className="Input"/>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" id="Login" color="primary" size="large"
                                                    type="submit">Login Admin</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;