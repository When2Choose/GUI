import React from "react";
import PropTypes from 'prop-types';
import {Button, Typography} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "./Alternative.css"
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem button style={style} key={index}>
            <ListItemText primary={`Item ${index + 1}`} />
        </ListItem>
    );
}

renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
};

function Alternative(props) {
    return (
        <Card variant="outlined" style={{paddingBottom: 10}}>
            <CardContent>
                <div className="Alternative">
                    <div className="AlternativeHeading">
                        <Typography variant="h5">Alternative {props.number}</Typography>
                    </div>
                    <div className="AlternativeDescription">
                        <Typography variant="p">you know how it be, lorum ipsum dolor in da
                            house. I need more text here, so I'm going to start telling you all about Arun. Arun is a
                            guy
                            who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                            things at WPI</Typography>
                    </div>
                    <div className="ApprovalContent">
                        <Grid container spacing={3} style={{paddingLeft: "1%", paddingRight: "1%"}}>
                            <Grid item xs={6}>
                                <Button variant="contained" id="Approve" color="primary"
                                        style={{float: "right"}}>Approve</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" id="Disapprove" color="primary" style={{float: "left"}}>Disapprove</Button>
                            </Grid> 
                            <Grid item xs={6} id="approvers">
                                {/*<FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>*/}
                                {/*    {renderRow}*/}
                                {/*</FixedSizeList>*/}
                            </Grid>
                            <Grid item xs={6} id="dispprovers">
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </CardContent>
        </Card>

    );
}

export default Alternative;