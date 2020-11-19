import React from "react";
import {Typography, TextField, Button} from "@material-ui/core";
import "./CreateChoice.css"
import {Link} from "react-router-dom";

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
                <Link to="/view">
                    <div className="Vertical">
                        <Button variant="contained" id="Create" color="primary">Create choice</Button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CreateChoice;