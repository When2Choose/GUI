import React from "react";
import {Typography, TextField, Button, CardContent, Card, Table, TableRow, TableCell, TableBody, TableHead} from "@material-ui/core";
import {Link} from "react-router-dom";
import "./Administrator.css";

function createData(choice) {
  return { choice };
}

const rows = [
  createData('Choice 1'),
  createData('Choice 2'),
  createData('Choice 3'),
  createData('Choice 4'),
  createData('Choice 5'),
  createData('Choice 6'),
];

function Administrator() {
  return(
    <div className="AdministratorContent">
      <div className="LeftAdministratorContent">
        <Card>
          <CardContent>
            <div className="GenerateReport">
              <Link to="/adminReport">
                <Button variant="contained" id="GenerateReport" color="primary" size="large">Generate Report of Choices</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="RightAdministratorContent">
        <Card variant="outlined">
          <CardContent>
            <div className="DeleteChoices">
              <Typography variant="body1">Delete all choices more than </Typography>
              <TextField id="NumChoiceDelete" type="number" style={{width: '6%'}} />
              <Typography variant="body1"> days old.</Typography>
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
