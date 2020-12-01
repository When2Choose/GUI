import * as React from "react";
import {Button, Typography, Grid} from "@material-ui/core";
import Alternative from "./Alternatives";
import "./ViewChoice.css";
import {
    Link,
    withRouter
} from "react-router-dom";

class ViewChoice extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "React",
            alternative0: <Alternative number="0" id="alternative0"/>,
            alternative1: <Alternative number="1" id="alternative1"/>,
            alternative2: <Alternative number="2" id="alternative2"/>,
            alternative3: <Alternative number="3" id="alternative3"/>,
            alternative4: <Alternative number="4" id="alternative4"/>
        }
    }

    componentDidMount() {
        const id = localStorage.getItem("choiceID");
        var xmlhttp = new XMLHttpRequest();
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
                    if (alternatives[i]["description"] === "") {
                        switch (i) {
                            case 0:
                                this.setState({alternative0: false});
                                break;
                            case 1:
                                this.setState({alternative1: false});
                                break;
                            case 2:
                                this.setState({alternative2: false});
                                break;
                            case 3:
                                this.setState({alternative3: false});
                                break;
                            case 4:
                                this.setState({alternative4: false});
                                break;
                            default:
                                break;
                        }
                    } else {
                        document.getElementById("details" + i).innerText = alternatives[i]["description"];
                        switch (i) {
                            case 0:
                                this.setState({
                                    alternative0: <Alternative number="0" approvers={alternatives[i]["Approvers"]}
                                                               disapprovers={alternatives[i]["Disapprovers"]}/>
                                });
                                break;
                            case 1:
                                this.setState({
                                    alternative1: <Alternative number="1" approvers={alternatives[i]["Approvers"]}
                                                               disapprovers={alternatives[i]["Disapprovers"]}/>
                                });
                                break;
                            case 2:
                                this.setState({
                                    alternative2: <Alternative number="2" approvers={alternatives[i]["Approvers"]}
                                                               disapprovers={alternatives[i]["Disapprovers"]}/>
                                });
                                break;
                            case 3:
                                this.setState({
                                    alternative3: <Alternative number="3" approvers={alternatives[i]["Approvers"]}
                                                               disapprovers={alternatives[i]["Disapprovers"]}/>
                                });
                                break;
                            case 4:
                                this.setState({
                                    alternative4: <Alternative number="4" approvers={alternatives[i]["Approvers"]}
                                                               disapprovers={alternatives[i]["Disapprovers"]}/>
                                });
                                break;
                            default:
                                break;
                        }
                    }
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
                            <Button variant="contained" id="Complete" color="primary"
                                    style={{float: "right"}}>Complete</Button>
                        </Link>
                    </Grid>
                    {this.state.alternative0}
                    {this.state.alternative1}
                    {this.state.alternative2}
                    {this.state.alternative3}
                    {this.state.alternative4}
                </Grid>
            </div>
        );
    }
}

export default withRouter(ViewChoice);
