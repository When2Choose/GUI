import React from "react";
import {Typography, TextField, Button, Grid, Paper, CardContent, Card} from "@material-ui/core";
import "./CreateChoice.css"


function CreateChoice() {
    const [members, setMembers] = React.useState(0);
    const [description, setDescription] = React.useState('');
    var alternatives = ['','','','',''];

    const handleCreate = () => {
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        const postTo = "";
        // xmlhttp.open("POST", postTo);
        // xmlhttp.setRequestHeader("Content-Type", "application/json");
        // xmlhttp.send(JSON.stringify());
        var data = {
            memberCount: members,
            description: description,
            alternatives: alternatives
        }
        // console.log(JSON.stringify(data));
    }

    const handleMemberChange = (event) => {
        if (event.target.value) {
            setMembers(event.target.value);
        }
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleAlternativesChange = (event) => {
        alternatives[event.target.id.charAt(11)] = event.target.value;
    }

    return (
        <div className="CreateChoice" style={{paddingLeft: "1%", paddingRight: "1%"}}>
            <Typography variant="h2" style={{paddingBottom: "1%"}}> Create new choice </Typography>
            <Card variant="outlined" style={{paddingBottom: 10}}>
                <CardContent>
                    <Grid container direction="column" spacing={3} className="CreateChoiceDivider" justify="center"
                          xs={12}>
                        <Grid item>
                            <form className="CreateChoiceForm" onSubmit={handleCreate}>
                                <Grid container direction="column" spacing={3} justify="center" xs={12}
                                      style={{paddingLeft: "1%", paddingRight: "1%"}}>
                                    <Grid item>
                                        <TextField required variant="outlined" id="memberCount"
                                                   type="number" label="Number of group members" style={{width: '20%'}}
                                                   onChange={handleMemberChange}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField required variant="outlined" id="choiceDescription" type="text"
                                                   label="Description of choice" className="TextEntry"
                                                   style={{paddingBottom: "1%"}} onChange={handleDescriptionChange}
                                                   multiline={true}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField required variant="outlined" id="alternative0" type="text"
                                                   label="Alternative 1" className="TextEntry" multiline={true} onChange={handleAlternativesChange}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField required variant="outlined" id="alternative1" type="text"
                                                   label="Alternative 2" className="TextEntry" multiline={true} onChange={handleAlternativesChange}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField variant="outlined" id="alternative2" type="text"
                                                   label="Alternative 3" className="TextEntry" multiline={true} onChange={handleAlternativesChange}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField variant="outlined" id="alternative3" type="text"
                                                   label="Alternative 4" className="TextEntry" multiline={true} onChange={handleAlternativesChange}/>
                                    </Grid>
                                    <Grid item>
                                        <TextField variant="outlined" id="alternative4" type="text"
                                                   label="Alternative 5" className="TextEntry" multiline={true} onChange={handleAlternativesChange}/>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" id="Create" color="primary" type="submit" onSubmit={handleCreate}>Create
                                            choice</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}

export default CreateChoice;