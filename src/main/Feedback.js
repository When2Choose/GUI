import React from "react";
import {withRouter} from "react-router-dom";
import {
    Card,
    CardContent,
    Grid,
    Typography,
    TextField
} from "@material-ui/core";

import "./Feedback.css";
import Button from "@material-ui/core/Button";

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.handleComment = this.handleComment.bind(this);
    }

    handleComment() {
        // POST
        const api_url = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/choice/addFeedback";
        let xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        xmlhttp.open("POST", api_url, true);
        xmlhttp.responseType = "json";
        xmlhttp.onloadend = () => {
            console.log("Response: " + JSON.stringify(xmlhttp.response));
            if (xmlhttp.response.statusCode === 400) {
                alert("ERROR: " + xmlhttp.response.response);
            } else {
                window.location.reload(false);
            }
        };
        const data = {
            user: localStorage.getItem("user"),
            alternativeIndex: parseInt(this.props.number),
            choiceId: localStorage.getItem("choiceID"),
            feedbackText: document.getElementById("commentInput"+this.props.number).value
        };
        console.log("local: " + JSON.stringify(data));
        if (data.feedbackText !== "") {
            xmlhttp.send(JSON.stringify(data));
        }
    }

    renderFeedback(feed) {
        return (feed.map((value) => {
            return (
                <Grid item xs={12} key={value["description"]+value["User"]}>
                    <Card variant="outlined" >
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="body1" align="left">{value["description"]}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" align="left">posted by: {value["User"]}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            );
        }));
    }

    render() {
        return (
            <div className="FeedbackContent">
                <Grid container spacing={3}>
                    {this.renderFeedback(this.props.feedback)}
                    <Grid item xs={10}>
                        <TextField id={"commentInput"+this.props.number} type="text"
                                   label="Enter feedback:" className="TextEntry" multiline={true}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={this.handleComment} variant="contained" color="primary">Submit</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withRouter(Feedback);