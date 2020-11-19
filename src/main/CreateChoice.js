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
                    <TextField required id="choiceAllowedMembersNumber" type="number"
                               label="Number of group members" style={{width: '25%'}} />
                </div>
                <div className="Vertical">
                    <TextField required id="choiceDescription" type="text"
                               label="Description of choice" style={{width: '75%', paddingBottom:"1%"}} multiline={true}/>
                </div>
                <div className="Vertical">
                    <TextField required id="alternative1" type="text"
                               label="Alternative 1" style={{width: '75%'}} multiline={true}/>
                </div>
                <div className="Vertical">
                    <TextField required id="alternative2" type="text"
                               label="Alternative 2" style={{width: '75%'}} multiline={true}/>
                </div>
                <div className="Vertical">
                    <TextField id="alternative3" type="text"
                               label="Alternative 3" style={{width: '75%'}} multiline={true}/>
                </div>
                <div className="Vertical">
                    <TextField id="alternative4" type="text"
                               label="Alternative 4" style={{width: '75%'}} multiline={true}/>
                </div>
                <div className="Vertical">
                    <TextField id="alternative5" type="text"
                               label="Alternative 5" style={{width: '75%'}} multiline={true}/>
                </div>
                <Link to="/view">
                    <div className="CreateButton">
                        <Button variant="contained" id="Create" color="primary">Create choice</Button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CreateChoice;