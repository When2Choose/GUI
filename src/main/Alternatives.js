import React from "react";
import {Button, Typography, List, Card, Grid, ListItem, ListItemText, CardContent} from "@material-ui/core";
import "./Alternative.css"
import {withRouter} from "react-router-dom";

class Alternatives extends React.Component {

    constructor(props) {
        super(props);
        this.handleApprove = this.handleApprove.bind(this);
        this.handleDisapprove = this.handleDisapprove.bind(this);
        this.post = this.post.bind(this);
    }

    renderApprovers(approvers) {
        return (approvers.map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
                <ListItem key={value} role={undefined} dense button>
                    <ListItemText id={labelId} primary={value}/>
                </ListItem>
            );
        }));
    }

    renderDisapprovers(disapprovers) {
        return (disapprovers.map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
                <ListItem key={value} role={undefined} dense button>
                    <ListItemText id={labelId} primary={value}/>
                </ListItem>
            );
        }));
    }

    handleApprove() {
        const name = localStorage.getItem("user");
        if (this.props.disapprovers.includes(name)) {
            this.swapToApprove()
        } else if (this.props.approvers.includes(name)){
            this.removeApprove(true);
        } else {
            this.approve(true);
        }
    }

    handleDisapprove() {
        const name = localStorage.getItem("user");
        if (this.props.approvers.includes(name)){
            this.swapToDisapprove(false);
        }else if (this.props.disapprovers.includes(name)) {
            this.removeDisapprove(true);
        } else {
            this.disapprove(true);
        }
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
        if (this.props.approvers.includes(name)){
            return "grey";
        } else {
            return "primary";
        }
    }

    getDisapproveColor() {
        const name = localStorage.getItem("user");
        if (this.props.disapprovers.includes(name)){
            return "grey";
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
                            <div className="AlternativeHeading">
                                <Typography variant="h3">Alternative {parseInt(this.props.number) + 1}</Typography>
                            </div>
                            <div className="AlternativeDescription">
                                <Typography variant="body1" display="block" align="left"
                                            id={"details" + this.props.number}/>
                            </div>
                            <div className="ApprovalContent">
                                <Grid container spacing={3} style={{paddingLeft: "1%", paddingRight: "1%"}}>
                                    <Grid item xs={6}>
                                        <Button variant="contained" id="Approve" color={this.getApproveColor()}
                                                style={{float: "right"}} onClick={this.handleApprove}>Approve</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button variant="contained" id="Disapprove" color={this.getDisapproveColor()}
                                                style={{float: "left"}}
                                                onClick={this.handleDisapprove}>Disapprove</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Grid container spacing={3}>
                                                    <Grid item>
                                                        <Typography variant="h4">
                                                            Approvers: {this.props.approvers.length}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <List className="approvers">
                                                            {this.renderApprovers(this.props.approvers)}
                                                        </List>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Grid container spacing={3}>
                                                    <Grid item>
                                                        <Typography variant="h4">
                                                            Disapprovers: {this.props.disapprovers.length}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <List className="disapprovers">
                                                            {this.renderDisapprovers(this.props.disapprovers)}
                                                        </List>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}


Alternatives.defaultProps = {
    approvers: [],
    disapprovers: []
}


export default withRouter(Alternatives);