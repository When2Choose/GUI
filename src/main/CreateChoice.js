import React from "react";
import {Typography, TextField, Button, Grid, Paper} from "@material-ui/core";
import "./CreateChoice.css"

function CreateChoice() {
    return (
        <div className="CreateChoice">
            <Grid container direction="column" spacing={3} className="CreateChoiceGrid" justify="center" xs={12}>
                <Grid item>
                    <Paper variant="elevation" elevation={2} className="Paper">
                        <Grid container direction="column" spacing={3} className="CreateChoiceDivider" justify="center"
                              xs={12}>
                            <Grid item>
                                <Typography variant="h3"> Create new choice </Typography>
                            </Grid>
                            <Grid item>
                                <form className="CreateChoiceForm">
                                    <Grid container direction="column" spacing={3} justify="center" xs={12} style={{paddingLeft: "1%", paddingRight: "1%"}}>
                                        <Grid item>
                                            <TextField required variant="outlined" id="choiceAllowedMembersNumber"
                                                       type="number"
                                                       label="Number of group members" style={{width: '20%'}}/>
                                        </Grid>
                                        <Grid item>
                                            <TextField required variant="outlined" id="choiceDescription" type="text"
                                                       label="Description of choice" className="TextEntry"
                                                       style={{paddingBottom: "1%"}}
                                                       multiline={true}/>
                                        </Grid>
                                        <Grid item>
                                            <TextField required variant="outlined" id="alternative1" type="text"
                                                       label="Alternative 1" className="TextEntry" multiline={true}/>
                                        </Grid>
                                        <Grid item>
                                            <TextField required variant="outlined" id="alternative2" type="text"
                                                       label="Alternative 2" className="TextEntry" multiline={true}/>
                                        </Grid>
                                        <Grid item>
                                            <TextField variant="outlined" id="alternative3" type="text"
                                                       label="Alternative 3" className="TextEntry" multiline={true}/>
                                        </Grid>
                                        <Grid item>
                                            <TextField variant="outlined" id="alternative4" type="text"
                                                       label="Alternative 4" className="TextEntry" multiline={true}/>
                                        </Grid>
                                        <Grid item>
                                            <TextField variant="outlined" id="alternative5" type="text"
                                                       label="Alternative 5" className="TextEntry" multiline={true}/>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" id="Create" color="primary">Create
                                                choice</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default CreateChoice;