import React from "react";
import {Button, Typography, List, Card, Grid, ListItem, ListItemText, CardContent} from "@material-ui/core";
import "./Alternative.css"
import {withRouter} from "react-router-dom";

class Alternatives extends React.Component {


    renderApprovers(alternativeNumber, approvers) {
        return (approvers.map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
                <ListItem key={value} role={undefined} dense button>
                    <ListItemText id={labelId} primary={value}/>
                </ListItem>
            );
        }));
    }

    renderDisapprovers(alternativeNumber, disapprovers) {
        return (disapprovers.map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
                <ListItem key={value} role={undefined} dense button>
                    <ListItemText id={labelId} primary={value}/>
                </ListItem>
            );
        }));
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
                                                            Approvers
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <List className="approvers">
                                                            {this.renderApprovers(this.props.number, this.props.approvers)}
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
                                                            Disapprovers
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <List className="disapprovers">
                                                            {this.renderDisapprovers(this.props.number, this.props.disapprovers)}
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