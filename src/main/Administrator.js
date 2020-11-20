import React from "react";
import {Typography, TextField, Button, Grid, Paper, CardContent, Card, Table, TableRow, TableCell, TableBody} from "@material-ui/core";
import "./Administrator.css";

function Administrator() {
  return(
    <div className="AdministratorContent">
      <div className="LeftAdministratorContent">
        <Card>
          <CardContent>
            <TextField
              className="choicesListItem"
              id="choice1"
              defaultValue="Choice 1"
              style={{
                padding: "2%",
                width: "100%"
              }}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <br/>
            <TextField
              className="choicesListItem"
              id="choice2"
              defaultValue="Choice 2"
              style={{
                padding: "2%",
                width: "100%"
              }}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <br/>
            <TextField
              className="choicesListItem"
              id="choice3"
              defaultValue="Choice 3"
              style={{
                padding: "2%",
                width: "100%"
              }}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <br/>
            <TextField
              className="choicesListItem"
              id="choice4"
              defaultValue="Choice 4"
              style={{
                padding: "2%",
                width: "100%"
              }}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </CardContent>
        </Card>
      </div>
      <div className="RightAdministratorContent">
        <Card variant="outlined">
          <CardContent>
            <div className="GenerateReport">
              <Button variant="contained" id="GenerateReport" color="primary" size="large">Generate Report of Choices</Button>
            </div>
            <hr/>
            <div className="DeleteChoices">
              <Typography variant="p">Delete all choices more than </Typography>
              <TextField id="NumChoiceDelete" type="number" style={{width: '6%'}} />
              <Typography variant="p"> days old.</Typography>
              <div className="DeleteChoicesButton">
                <Button variant="contained" id="GenerateReport" color="secondary" size="large">Delete Choices</Button>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

export default Administrator;
