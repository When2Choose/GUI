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
    }

    renderFeedback(feedback) {
        return (feedback.map((value) => {
            return (
                <Grid item xs={12}>
                    <Card variant="outlined">
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                            <Typography variant="body1" align="left">{value.content}</Typography>
                                </Grid>
                                <Grid item>
                            <Typography variant="body2" align="left">posted by: {value.user}</Typography>
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
                    {this.renderFeedback([
                        {user: "grant", content: "test"},
                        // {user: "anthony", content: "test1"},
                        // {user: "arun", content: "test2"}
                    ])}
                    <Grid item xs={10}>
                        <TextField id="commentInput" type="text"
                                   label="Enter feedback:   " className="TextEntry" multiline={true}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={this.handleComment()} variant="contained" color="primary">Test</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withRouter(Feedback);