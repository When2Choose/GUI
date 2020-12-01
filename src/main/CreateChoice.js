import React from "react";
import {Typography, TextField, Button, Grid, CardContent, Card} from "@material-ui/core";
import "./CreateChoice.css"

function CreateChoice() {

    const handleCreate = () => {
        let nonZeroMembers = document.getElementById("memberCount").value > 0;
        let validMembers = document.getElementById("memberCount").checkValidity();
        let validDescription = document.getElementById("descriptionChoice").checkValidity();
        let validAlt0 = document.getElementById("alternative0").checkValidity();
        let validAlt1 = document.getElementById("alternative1").checkValidity();
        if (nonZeroMembers && validMembers && validDescription && validAlt0 && validAlt1) {
            var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
            const postTo = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/createChoice";
            xmlhttp.open("POST", postTo, true);
            xmlhttp.responseType = "json";
            xmlhttp.onloadend = function () {
                console.log("Response: " + JSON.stringify(xmlhttp.response));
                if (this.readyState === XMLHttpRequest.DONE && this.response.statusCode === 200) {
                    let ID = JSON.parse(xmlhttp.response.response)["ID"];
                    console.log(ID);
                    document.getElementById("choiceID").innerText = ID;
                    document.getElementById("URIRevealer").style.visibility = "visible";
                }
            };

            const data = {
                memberCount: document.getElementById("memberCount").value,
                description: document.getElementById("descriptionChoice").value,
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
    }

    return (
        <div className="CreateChoice">
            <Typography variant="h2" style={{paddingBottom: "1%"}}> Create new choice </Typography>
            <Card variant="outlined" style={{paddingBottom: 10}}>
                <CardContent>
                    <form className="CreateChoiceForm" onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        <Grid container direction="column" spacing={3} justify="center"
                              style={{padding: "1%"}}>
                            <Grid item>
                                <TextField required variant="outlined" id="memberCount"
                                           type="number" label="Number of group members"
                                           style={{width: '20%', minWidth: "250px"}}/>
                            </Grid>

                            <Grid item>
                                <TextField required variant="outlined" id="descriptionChoice" type="text"
                                           label="Description of choice" className="TextEntry" multiline={true}/>
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
                                <Button variant="contained" id="Create" color="primary" type="submit"
                                        onClick={handleCreate}>Create choice</Button>
                            </Grid>
                        </Grid>
                    </form>
                    <div id="URIRevealer">
                        <Typography variant="body1">Copy Choice ID for later:</Typography>
                        <Typography variant="h4" id="choiceID">WHY CAN YOU SEE THIS</Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default CreateChoice;