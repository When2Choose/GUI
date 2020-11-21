import React from "react";
import {Typography, TextField, Button, Grid, CardContent, Card} from "@material-ui/core";
import "./CreateChoice.css"
import ViewChoice from "./ViewChoice";
import {HashRouter, Route} from "react-router-dom";


function CreateChoice() {
    let newProps = {};

    const handleCreate = () => {
        const xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        const postTo = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/grant/createChoice";
        xmlhttp.open("POST", postTo, true);
        xmlhttp.responseType = "json";
        xmlhttp.onloadend = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log("Response: " + JSON.stringify(xmlhttp.response));
                window.location.href = '/index.html#/view';
            }
        };

        const data = {
            memberCount: document.getElementById("memberCount").value,
            description: document.getElementById("choiceDescription").value,
            alternatives: [
                document.getElementById("alternative0").value,
                document.getElementById("alternative1").value,
                document.getElementById("alternative2").value,
                document.getElementById("alternative3").value,
                document.getElementById("alternative4").value]
        }
        xmlhttp.send(JSON.stringify(data));
        console.log("local: " + JSON.stringify(data));
    }

    return (
        <div className="CreateChoice" style={{paddingLeft: "1%", paddingRight: "1%"}}>
            <Typography variant="h2" style={{paddingBottom: "1%"}}> Create new choice </Typography>
            <Card variant="outlined" style={{paddingBottom: 10}}>
                <CardContent>
                    <form className="CreateChoiceForm" onSubmit={handleCreate}>
                        <Grid container direction="column" spacing={3} justify="center"
                              style={{paddingLeft: "1%", paddingRight: "1%"}}>
                            <Grid item>
                                <TextField required variant="outlined" id="memberCount"
                                           type="number" label="Number of group members"
                                           style={{width: '20%', minWidth: "250px"}}/>
                            </Grid>
                            <Grid item>
                                <TextField required variant="outlined" id="choiceDescription" type="text"
                                           label="Description of choice" className="TextEntry"
                                           style={{paddingBottom: "1%"}}
                                           multiline={true}/>
                            </Grid>
                            <Grid item>
                                <TextField required variant="outlined" id="alternative0" type="text"
                                           label="Alternative 1" className="TextEntry" multiline={true}/>
                            </Grid>
                            <Grid item>
                                <TextField required variant="outlined" id="alternative1" type="text"
                                           label="Alternative 2" className="TextEntry" multiline={true}/>
                            </Grid>
                            <Grid item>
                                <TextField variant="outlined" id="alternative2" type="text"
                                           label="Alternative 3" className="TextEntry" multiline={true}/>
                            </Grid>
                            <Grid item>
                                <TextField variant="outlined" id="alternative3" type="text"
                                           label="Alternative 4" className="TextEntry" multiline={true}/>
                            </Grid>
                            <Grid item>
                                <TextField variant="outlined" id="alternative4" type="text"
                                           label="Alternative 5" className="TextEntry" multiline={true}/>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" id="Create" color="primary" onClick={handleCreate}>Create
                                    choice</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default CreateChoice;