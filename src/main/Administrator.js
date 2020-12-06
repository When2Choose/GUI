import * as React from "react";
import {
    Typography,
    TextField,
    Button,
    CardContent,
    Card
} from "@material-ui/core";
import {Link, withRouter} from "react-router-dom";
import "./Administrator.css";

class Administrator extends React.Component {

  handleDelete() {
    const post_to = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/administrator/deleteChoices";
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", post_to, true);
    xmlhttp.responseType = "json";
    xmlhttp.onloadend = () => {
      console.log("Response: " + JSON.stringify(xmlhttp.response));
      if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.response.statusCode === 200) {
        document.getElementById("deleteChoicesSuccess").style.visibility = "visible";
        document.getElementById("deleteChoicesSuccess").innerText = "Choices Deleted";
      } else {
        document.getElementById("deleteChoicesSuccess").style.visibility = "visible";
        document.getElementById("deleteChoicesSuccess").innerText = "Choices Deleted";
      }
    }
    const data = {
      days: document.getElementById("NumChoiceDelete").value
    };
    console.log("local: " + JSON.stringify(data));
    if (data.days !== "") {
      xmlhttp.send(JSON.stringify(data));
    }

  }

  render() {
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
                                <Button variant="contained"
                                        id="GenerateReport"
                                        color="secondary"
                                        size="large"
                                        onClick={this.handleDelete}>Delete Choices</Button>
                            </div>
                            <Typography variant="body1" id="deleteChoicesSuccess"/>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
  }
}

export default withRouter(Administrator);
