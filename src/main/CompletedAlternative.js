import React from "react";
import {
    Typography,
    Card,
    Grid,
    CardContent
} from "@material-ui/core";
import "./Alternative.css"
import {withRouter} from "react-router-dom";
import Feedback from "./Feedback";

class CompletedAlternative extends React.Component {

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

    isChosen() {
      if(this.props.notChosen) {
        return "";
      } else {
        return " - Chosen Alternative"
      }
    }

    render() {
        return (
            <Grid item xs={12}>
                <Card variant="outlined" style={{paddingBottom: 10}}>
                    <CardContent>
                        <div className="Alternative">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h3"
                                                align="left">Alternative {parseInt(this.props.number) + 1 + this.isChosen()}</Typography>
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
                                            <Feedback feedback={this.props.feedback} notComplete={false}/>
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


CompletedAlternative.defaultProps = {
    approvers: [],
    disapprovers: [],
    feedback: [],
    notChosen: true
}


export default withRouter(CompletedAlternative);
