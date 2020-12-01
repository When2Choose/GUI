import React from "react";
import {Button, Typography, List, Card, Grid, ListItem, ListItemText, CardContent} from "@material-ui/core";
import "./Alternative.css"
import {withRouter} from "react-router-dom";

class Alternatives extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "React",
            approvers: [],
            disapprovers: [],
            index: -1
        }
    }


    renderApprovers() {
        const {approvers} = this.state;
        return (approvers.map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
                <ListItem key={value} role={undefined} dense button>
                    <ListItemText id={labelId} primary={value}/>
                </ListItem>
            );
        }));
    }

    renderDisapprovers() {
        const {disapprovers} = this.state;
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
        let xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        const postTo = "https://oncs4wp3hd.execute-api.us-east-1.amazonaws.com/beta/choice/%7BchoiceId%7D/%7BalternativeIndex%7D/approveAlternative";
        xmlhttp.open("POST", postTo, true);
        xmlhttp.responseType = "json";
        xmlhttp.onloadend = () => {
            console.log("Response: " + JSON.stringify(xmlhttp.response));
            if (this.readyState === XMLHttpRequest.DONE && this.response.statusCode === 200) {
                //TODO: refresh alternative
            } else if (this.response.statusCode === 400) {
                alert("ERROR: " + this.response.response);
            }
        }
        const data = {
            user: localStorage.getItem("name"),
            alternative: this.state.index,
            choiceId: localStorage.getItem("choiceID")
        }
        console.log("local: " + JSON.stringify(data));
        xmlhttp.send(JSON.stringify(data));
    }

    componentDidMount() {
        this.setState({approvers: this.props.approvers});
        this.setState({disapprovers: this.props.disapprovers});
        this.setState({index: this.props.number})
        this.forceUpdate();
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
                                        <Button variant="contained" id="Approve" color="primary"
                                                style={{float: "right"}}>Approve</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button variant="contained" id="Disapprove" color="primary"
                                                style={{float: "left"}}>Disapprove</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Grid container spacing={3}>
                                                    <Grid item>
                                                        <Typography variant="h4">
                                                            Approvers: {this.state.approvers.length}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <List className="approvers">
                                                            {this.renderApprovers()}
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
                                                            Disapprovers: {this.state.disapprovers.length}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <List className="disapprovers">
                                                            {this.renderDisapprovers()}
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