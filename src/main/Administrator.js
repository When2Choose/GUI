import React from "react";
import {Typography, TextField, Button, Grid, Paper} from "@material-ui/core";
import "./Administrator.css";

function Administrator() {
  return(
    <div className="AdministratorContent">
      <div className="LeftAdministratorContent">
        <Grid container spacing={2}>
          <Grid item xs={12} id="choice1" spacing={4}>
            <Paper>Choice 1</Paper>
          </Grid>

          <Grid item xs={12} id="choice2" spacing={4}>
            <Paper>Choice 2</Paper>
          </Grid>

          <Grid item xs={12} id="choice3" spacing={4}>
            <Paper>Choice 3</Paper>
          </Grid>

          <Grid item xs={12} id="choice4" spacing={4}>
            <Paper>Choice 4</Paper>
          </Grid>

          <Grid item xs={12} id="choice5" spacing={4}>
            <Paper>Choice 5</Paper>
          </Grid>

          <Grid item xs={12} id="choice6" spacing={4}>
            <Paper>Choice 6</Paper>
          </Grid>

          <Grid item xs={12} id="choice7" spacing={4}>
            <Paper>Choice 7</Paper>
          </Grid>

          <Grid item xs={12} id="choice8" spacing={4}>
            <Paper>Choice 8</Paper>
          </Grid>
        </Grid>
      </div>
      <div className="RightAdministratorContent">
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
      </div>
    </div>
  );
}

export default Administrator;
