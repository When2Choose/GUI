import * as React from "react";
import {Button, Typography, Grid} from "@material-ui/core";
import Alternative from "./Alternatives";
import "./ViewChoice.css";
import {
    Link,
    withRouter
} from "react-router-dom";

class ViewChoice extends React.Component {

    componentDidMount() {
        const id = localStorage.getItem("choiceID");
        var xmlhttp = new XMLHttpRequest();
        const postTo = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/choice";
        xmlhttp.open("POST", postTo, true);
        xmlhttp.responseType = "json";
        xmlhttp.onloadend = function () {
            console.log("Response: " + JSON.stringify(xmlhttp.response));
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                document.getElementById("ViewChoiceContent").style.visibility = "visible";
                let description = JSON.parse(xmlhttp.response.response)["Description"];
                document.getElementById("choiceDescription").innerText = description;
                let alternatives = JSON.parse(xmlhttp.response.response)["Alternatives"];
                for (let i = 0; i < 5; i++) {
                    document.getElementById("details" + i).innerText = alternatives[i]["description"];
                }
            }
        };

        const data = {
            uuidString: id
        }

        xmlhttp.send(JSON.stringify(data));
        console.log("local: " + JSON.stringify(data));
    }

    render() {
        const id = localStorage.getItem("choiceID");
        return (
            <div className="ViewChoice" id="ViewChoiceContent">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h2">Choice {id}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="body1" id="choiceDescription" align="left" display="block"> Insert a lot of
                            text here,
                            you know how it be, lorum ipsum dolor in da
                            house. I need more text here, so I'm going to start telling you all about Arun. Arun is a
                            guy
                            who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                            things at WPI</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to="/complete">
                            <Button variant="contained" id="Complete" color="primary"
                                    style={{float: "right"}}>Complete</Button>
                        </Link>
                    </Grid>

                    <Grid item xs={12} id="alt0">
                        <Alternative number="0" id="alternative0"/>
                    </Grid>

                    <Grid item xs={12} id="alt1">
                        <Alternative number="1" id="alternative1"/>
                    </Grid>
                    <Grid item xs={12} id="alt2">
                        <Alternative number="2" id="alternative2"/>
                    </Grid>
                    <Grid item xs={12} id="alt3">
                        <Alternative number="3" id="alternative3"/>
                    </Grid>
                    <Grid item xs={12} id="alt4">
                        <Alternative number="4" id="alternative4"/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withRouter(ViewChoice);
