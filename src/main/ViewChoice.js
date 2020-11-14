import React from "react";
import {Button, Typography, Grid} from "@material-ui/core";
import Alternative from "./Alternatives";
import "./ViewChoice.css";

function ViewChoice() {
    return (
        <div className="ViewChoice">
            <Grid container spacing={3} style={{paddingLeft: "1%", paddingRight: "1%"}}>
                <Grid item xs={12}>
                    <Typography variant="h2">Choice</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="p" id="choiceDescription" style={{width: "100%"}}>Insert a lot of text here,
                        you know how it be, lorum ipsum dolor in da
                        house. I need more text here, so I'm going to start telling you all about Arun. Arun is a guy
                        who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                        things at WPI</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" id="Complete" color="primary" style={{float: "right"}}>Complete</Button>
                </Grid>

                <Grid item xs={12} id="alt0">
                    <Alternative number="0"/>
                </Grid>

                <Grid item xs={12} id="alt1">
                    <Alternative number="1"/>
                </Grid>
                <Grid item xs={12} id="alt2">
                    <Alternative number="2"/>
                </Grid>
                <Grid item xs={12} id="alt3">
                    <Alternative number="3"/>
                </Grid>
                <Grid item xs={12} id="alt4">
                    <Alternative number="4"/>
                </Grid>
            </Grid>
        </div>
    );
}

export default ViewChoice;