import * as React from "react";
import {
    Button,
    Typography,
    Grid
} from "@material-ui/core";
import {
    Link,
    withRouter
} from "react-router-dom";
import Alternative from "./Alternatives";
import "./ViewChoice.css";

class ViewChoice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "React",
            alternatives: [
                <Alternative number="0" id="alternative0"/>,
                <Alternative number="1" id="alternative1"/>,
                <Alternative number="2" id="alternative2"/>,
                <Alternative number="3" id="alternative3"/>,
                <Alternative number="4" id="alternative4"/>
            ]
        }
    }

    componentDidMount() {
        const id = localStorage.getItem("choiceID");
        let xmlhttp = new XMLHttpRequest();
        const postTo = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/choice";
        xmlhttp.open("POST", postTo, true);
        xmlhttp.responseType = "json";
        xmlhttp.onloadend = () => {
            console.log("Response: " + JSON.stringify(xmlhttp.response));
            if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.response.statusCode === 200) {
                document.getElementById("ViewChoiceContent").style.visibility = "visible";
                document.getElementById("choiceDescription").innerText = JSON.parse(xmlhttp.response.response)["Description"];
                let alternatives = JSON.parse(xmlhttp.response.response)["Alternatives"];
                for (let i = 0; i < 5; i++) {
                    let tempAlternatives = this.state.alternatives;
                    if (alternatives[i]["description"] === "") {
                        tempAlternatives[i] = false;

                    } else {
                        document.getElementById("details" + i).innerText = alternatives[i]["description"];
                        tempAlternatives[i] = <Alternative number={i.toString()}
                                                           approvers={alternatives[i]["Approvers"]}
                                                           disapprovers={alternatives[i]["Disapprovers"]}/>;
                    }
                    this.setState({alternatives: tempAlternatives});
                }
                this.forceUpdate();
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
                        <Typography variant="body1" id="choiceDescription" align="left" display="block"/>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to="/complete">
                            <Button variant="contained" id="Complete" color="primary">Complete</Button>
                        </Link>
                    </Grid>
                    {this.state.alternative[0]}
                    {this.state.alternative[1]}
                    {this.state.alternative[2]}
                    {this.state.alternative[3]}
                    {this.state.alternative[4]}
                </Grid>
            </div>
        );
    }
}

export default withRouter(ViewChoice);
