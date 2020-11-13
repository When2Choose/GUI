import React from "react";
import {Button, Typography} from "@material-ui/core";
import Alternative from "./Alternatives";
import "./ViewChoice.css";

function ViewChoice() {
    return (
        <div className="ViewChoice">
            <div className="ChoiceHeadingContent">
                <Typography variant="h2">Choice</Typography>
                <Jumbotron>

                </Jumbotron>
                <div className="ChoiceDescriptionContent">
                    <Typography variant="p" id="choiceDescription" style={{width: "100%"}}>Insert a lot of text here,
                        you know how it be, lorum ipsum dolor in da
                        house. I need more text here, so I'm going to start telling you all about Arun. Arun is a guy
                        who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                        things at WPI</Typography>
                </div>
                <div className="CompleteChoice">
                    <Button variant="contained" id="Complete" color="primary">Complete</Button>
                </div>
            </div>
            <div className="ChoiceAlternatives">
                <Alternative/>
            </div>
        </div>
    );
}

export default ViewChoice;