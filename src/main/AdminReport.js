import * as React from "react";
import {CardContent, Card, Table, TableRow, TableCell, TableBody, TableHead} from "@material-ui/core";
import {
  withRouter
} from "react-router-dom";
import "./AdminReport.css";

class AdminReport extends React.Component {
  rows = [];
  createData(choice, description, date, complete) {
    return { choice, description, date, complete};
  };

  componentDidMount() {
    var xmlhttp = new XMLHttpRequest();
    const getFrom = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/administrator";
    xmlhttp.open("GET", getFrom);
    xmlhttp.responseType = "json";
    xmlhttp.onloadend = () => {
      console.log("Response: " + JSON.stringify(xmlhttp.response));
      if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
        let choices = JSON.parse(xmlhttp.response.response)["Choices"];
        for (let i = 0; i < choices.length; i++) {
          this.rows.push(this.createData("Choice " + choices[i]["ID"], choices[i]["description"], choices[i]["DateCreated"], choices[i]["isCompleted"]));
        }
        this.forceUpdate();

      }
    };

    xmlhttp.send(JSON.stringify({}));

  }

  render() {
    return (
      <div className="ReportContent">
        <Card>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{fontWeight: "bold",}}> Choice </TableCell>
                  <TableCell style={{fontWeight: "bold"}}> Description </TableCell>
                  <TableCell style={{fontWeight: "bold",}}> Date Created </TableCell>
                  <TableCell style={{fontWeight: "bold",}}> Complete </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.rows.map((row) => (
                  <TableRow key={row.choice}>
                    <TableCell component="th" scope="row">
                      {row.choice}
                    </TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.complete.toString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default withRouter(AdminReport);
