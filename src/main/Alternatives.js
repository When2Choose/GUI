import React from "react";
import {Button, Typography, List, Card, Grid, ListItem, ListItemText, CardContent} from "@material-ui/core";
import "./Alternative.css"

function renderApprovers(alternativeNumber) {
    return ([0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
            <ListItem key={value} role={undefined} dense button>
                <ListItemText id={labelId} primary={formatName(`${alternativeNumber}.${value} approver`)}/>
            </ListItem>
        );
    }));
}

function renderDispprovers(alternativeNumber) {
    return ([0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
            <ListItem key={value} role={undefined} dense button>
                <ListItemText id={labelId} primary={formatName(`${alternativeNumber}.${value} disapprover`)}/>
            </ListItem>
        );
    }));
}

function formatName(name) {
    return (
        `User's name: ${name}`
    );
}

function Alternative(props) {
    return (
        <Card variant="outlined" style={{paddingBottom: 10}}>
            <CardContent>
                <div className="Alternative">
                    <div className="AlternativeHeading">
                        <Typography variant="h5">Alternative {props.number}</Typography>
                    </div>
                    <div className="AlternativeDescription">
                        <Typography variant="body1" display="block" align="left">you know how it be, lorum ipsum dolor in da
                            house. I need more text here, so I'm going to start telling you all about Arun. Arun is
                            a
                            guy
                            who does a lot of stuff, like coding and taking classes and courses and lots of of
                            teaching
                            things at WPI</Typography>
                    </div>
                    <div className="ApprovalContent">
                        <Grid container spacing={3} style={{paddingLeft: "1%", paddingRight: "1%"}}>
                            <Grid item xs={6}>
                                <Button variant="contained" id="Approve" color="primary"
                                        style={{float: "right"}}>Approve</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" id="Disapprove" color="primary"
                                        style={{float: "left"}}>Disapprove</Button>
                            </Grid>
                            <Grid item xs={6} id="approvers">
                                <List className="test" style={{float: "right"}}>
                                    {renderApprovers(props.number)}
                                </List>
                            </Grid>
                            <Grid item xs={6} id="dispprovers">
                                <List className="test" style={{float: "left"}}>
                                    {renderDispprovers(props.number)}
                                </List>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </CardContent>
        </Card>

    );
}

export default Alternative;