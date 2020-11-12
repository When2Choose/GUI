import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import "./CreateChoice.css"
import {Typography} from "@material-ui/core";


function CreateChoice() {
    return (
        <div className="CreateChoice">
            <div className="CreateChoiceContent">
                <Typography variant="h3"> Create new choice </Typography>
                <div className="Vertical">
                    <TextField id="choiceAllowedMembersNumber" type="number"
                               label="Number of group members" style={{width: '25%'}} />
                </div>
                <div className="Vertical">
                    <TextField id="choiceDescription" type="text"
                               label="Description" style={{width: '75%'}} multiline={true}/>
                </div>
                <div className="Vertical">
                    <Button variant="contained" id="Create" color="primary">Create choice</Button>
                </div>
            </div>
        </div>
    );
}

export default CreateChoice;