import React from "react";
import {CardContent, Card, Table, TableRow, TableCell, TableBody, TableHead} from "@material-ui/core";
import "./AdminReport.css";

function createData(choice, date, complete) {
  return { choice, date, complete };
}

const rows = [
  createData('Choice 1', '2/29/21', "true"),
  createData('Choice 2', '2/31/21', "false"),
  createData('Choice 3', '2/31/21', "false"),
  createData('Choice 4', '2/29/21', "true"),
];

function AdminReport() {
  return (
    <div className="ReportContent">
      <Card>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{fontWeight: "bold",}}> Choice </TableCell>
                <TableCell style={{fontWeight: "bold",}}> Date Created </TableCell>
                <TableCell style={{fontWeight: "bold",}}> Complete </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.choice}>
                  <TableCell component="th" scope="row">
                    {row.choice}
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.complete}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminReport;
