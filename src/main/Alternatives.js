import React from "react";
import {
    Button,
    Typography,
    Card,
    Grid,
    CardContent
} from "@material-ui/core";
import "./Alternative.css"
import {withRouter} from "react-router-dom";
import Feedback from "./Feedback";

class Alternatives extends React.Component {

    constructor(props) {
        super(props);
        this.handleApprove = this.handleApprove.bind(this);
        this.handleDisapprove = this.handleDisapprove.bind(this);
        this.post = this.post.bind(this);
    }

    renderApprovers(approvers) {
        return (approvers.map((value) => {
            return (
                <Grid item xs={6} key={value}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="body1">
                                {value}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            );
        }));
    }

    renderDisapprovers(disapprovers) {
        return (disapprovers.map((value) => {
            return (
                <Grid item xs={6} key={value}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="body1">
                                {value}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            );
        }));
    }

    handleApprove() {
        const name = localStorage.getItem("user");
        if (this.props.disapprovers.includes(name)) {
            this.swapToApprove()
        } else if (this.props.approvers.includes(name)) {
            this.removeApprove(true);
        } else {
            this.approve(true);
        }
    }

    handleDisapprove() {
        const name = localStorage.getItem("user");
        if (this.props.approvers.includes(name)) {
            this.swapToDisapprove(false);
        } else if (this.props.disapprovers.includes(name)) {
            this.removeDisapprove(true);
        } else {
            this.disapprove(true);
        }
    }

    handleComplete() {
        const api_url = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/choice/completeChoice";
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
        }
        const data = {
            alternative: parseInt(this.props.number),
            choiceId: localStorage.getItem("choiceID")
        }
        console.log("local: " + JSON.stringify(data));
        xmlhttp.send(JSON.stringify(data));
    }

    swapToApprove() {
        // remove diapprove, then approve
        let xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        xmlhttp.open("POST", "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/choice/removeDisapprove", true);
        xmlhttp.responseType = "json";
        xmlhttp.onloadend = () => {
            console.log("Response: " + JSON.stringify(xmlhttp.response));
            if (xmlhttp.response.statusCode === 400) {
                alert("ERROR: " + xmlhttp.response.response);
            } else {
                this.approve(true);
            }
        }
        const data = {
            user: localStorage.getItem("user"),
            alternative: parseInt(this.props.number),
            choiceId: localStorage.getItem("choiceID")
        }
        console.log("local: " + JSON.stringify(data));
        xmlhttp.send(JSON.stringify(data));
    }

    swapToDisapprove() {
        let xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        xmlhttp.open("POST", "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/choice/removeApprove", true);
        xmlhttp.responseType = "json";
        xmlhttp.onloadend = () => {
            console.log("Response: " + JSON.stringify(xmlhttp.response));
            if (xmlhttp.response.statusCode === 400) {
                alert("ERROR: " + xmlhttp.response.response);
            } else {
                this.disapprove(true);
            }
        }
        const data = {
            user: localStorage.getItem("user"),
            alternative: parseInt(this.props.number),
            choiceId: localStorage.getItem("choiceID")
        }
        console.log("local: " + JSON.stringify(data));
        xmlhttp.send(JSON.stringify(data));
    }

    approve(refresh) {
        const approve = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/choice/approveAlternative";
        this.post(approve, refresh);
    }

    disapprove(refresh) {
        const disapprove = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/choice/disapproveAlternative";
        this.post(disapprove, refresh);
    }

    removeApprove(refresh) {
        const remove = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/choice/removeApprove";
        this.post(remove, refresh);
    }

    removeDisapprove(refresh) {
        const remove = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/choice/removeDisapprove";
        this.post(remove, refresh);
    }

    post(api_url, refresh) {
        let xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        xmlhttp.open("POST", api_url, true);
        xmlhttp.responseType = "json";
        xmlhttp.onloadend = () => {
            console.log("Response: " + JSON.stringify(xmlhttp.response));
            if (xmlhttp.response.statusCode === 400) {
                alert("ERROR: " + xmlhttp.response.response);
            } else if (refresh) {
                window.location.reload(false);
            }
        }
        const data = {
            user: localStorage.getItem("user"),
            alternative: parseInt(this.props.number),
            choiceId: localStorage.getItem("choiceID")
        }
        console.log("local: " + JSON.stringify(data));
        xmlhttp.send(JSON.stringify(data));
    }

    getApproveColor() {
        const name = localStorage.getItem("user");
        if (this.props.approvers.includes(name)) {
            return "default";
        } else {
            return "primary";
        }
    }

    getDisapproveColor() {
        const name = localStorage.getItem("user");
        if (this.props.disapprovers.includes(name)) {
            return "default";
        } else {
            return "primary";
        }
    }

    render() {
        return (
            <Grid item xs={12}>
                <Card variant="outlined" style={{paddingBottom: 10}}>
                    <CardContent>
                        <div className="Alternative">
                            <Grid container spacing={3}>
                                <Grid item xs={2}>
                                    <Typography variant="h3"
                                                align="left">Alternative {parseInt(this.props.number) + 1}</Typography>
                                </Grid>
                                <Grid item xs={10}>
                                    <Button variant="contained" className="completeButton" color="primary" onClick={this.handleComplete}>Complete</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1" display="block" align="left"
                                                id={"details" + this.props.number}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={5}>
                                        <Grid item xs={6}>
                                            <Card variant="outlined">
                                                <CardContent>
                                                    <Grid container direction="column">
                                                        <Grid item>
                                                            <Grid container direction="row" justify="center">
                                                                <Grid item xs={6}>
                                                                    <Typography variant="h4" align="center">
                                                                        Approvers: {this.props.approvers.length}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={1}>
                                                                    <Button variant="contained" id="Approve"
                                                                            color={this.getApproveColor()}
                                                                            style={{float: "right"}}
                                                                            onClick={this.handleApprove}>Approve</Button>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid container spacing={3}>
                                                                {this.renderApprovers(this.props.approvers)}
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Card variant="outlined">
                                                <CardContent>
                                                    <Grid container direction="column">
                                                        <Grid item>
                                                            <Grid container direction="row" justify="center">
                                                                <Grid item xs={6}>
                                                                    <Typography variant="h4">
                                                                        Disapprovers: {this.props.disapprovers.length}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={1}>
                                                                    <Button variant="contained" id="Disapprove"
                                                                            color={this.getDisapproveColor()}
                                                                            style={{float: "left"}}
                                                                            onClick={this.handleDisapprove}>Disapprove</Button>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid container spacing={3}>
                                                                {this.renderDisapprovers(this.props.disapprovers)}
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" align="left">
                                                Feedback
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Feedback feedback={this.props.feedback}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}


Alternatives.defaultProps = {
    approvers: [],
    disapprovers: [],
    feedback: []
}


export default withRouter(Alternatives);