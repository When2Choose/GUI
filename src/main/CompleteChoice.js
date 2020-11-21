import React from "react";
import {
    FormControlLabel,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    Button,
    Grid,Typography, CardContent, Card
} from '@material-ui/core';
import "./CompleteChoice.css"

function CompleteChoice() {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        switch (value) {
            case "alternative0":
            case "alternative1":
            case "alternative2":
            case "alternative3":
            case "alternative4":
                setError(false);
                break;
            default:
                setError(true);
                break;
        }
    };

    return (
        <div className="CompleteChoice">
            <Typography variant="h2">Complete choice</Typography>
            <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" error={error}>
                    <FormLabel component="legend" style={{paddingBottom: "10px"}}>Choose the best
                        alternative</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleChange}>
                        <Grid container justify="center" direction="row" spacing={3}
                              className="CompleteGrid">
                            <Grid item>
                                <Card variant="outlined" className="Card">
                                    <CardContent>
                                        <Typography variant="h5" style={{float: "left"}}> Alternative
                                            0</Typography>
                                        <FormControlLabel value="alternative0" control={<Radio/>}
                                                          className="AlternativeOption" label="Insert a lot of
                                        text here, you know how it be, lorum ipsum dolor in da
                                        house. I need more text here, so I'm going to start telling you all about Arun. Arun is a guy
                                        who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                                        things at WPI"/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card variant="outlined" className="Card">
                                    <CardContent>
                                        <Typography variant="h5" style={{float: "left"}}> Alternative
                                            1</Typography>
                                        <FormControlLabel value="alternative1" control={<Radio/>}
                                                          className="AlternativeOption" label="Insert a lot of
                                        text here, you know how it be, lorum ipsum dolor in da
                                        house. I need more text here, so I'm going to start telling you all about Arun. Arun is a guy
                                        who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                                        things at WPI"/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card variant="outlined" className="Card">
                                    <CardContent>
                                        <Typography variant="h5" style={{float: "left"}}> Alternative
                                            2</Typography>
                                        <FormControlLabel value="alternative2" control={<Radio/>}
                                                          className="AlternativeOption" label="Insert a lot of
                                        text here, you know how it be, lorum ipsum dolor in da
                                        house. I need more text here, so I'm going to start telling you all about Arun. Arun is a guy
                                        who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                                        things at WPI"/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card variant="outlined" className="Card">
                                    <CardContent>
                                        <Typography variant="h5" style={{float: "left"}}> Alternative
                                            3</Typography>
                                        <FormControlLabel value="alternative3" control={<Radio/>}
                                                          className="AlternativeOption" label="Insert a lot of
                                        text here, you know how it be, lorum ipsum dolor in da
                                        house. I need more text here, so I'm going to start telling you all about Arun. Arun is a guy
                                        who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                                        things at WPI"/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card variant="outlined" className="Card">
                                    <CardContent>
                                        <Typography variant="h5" style={{float: "left"}}> Alternative
                                            4</Typography>
                                        <FormControlLabel value="alternative4" control={<Radio/>}
                                                          className="AlternativeOption" label="Insert a lot of
                                    text here, you know how it be, lorum ipsum dolor in da
                                    house. I need more text here, so I'm going to start telling you all about Arun. Arun is a guy
                                    who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                                    things at WPI"/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item className="SubmitButtonItem">
                                <Button type="submit" variant="contained" color="default" size="large"
                                        className="SubmitButton">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </form>
        </div>
    );
}

export default CompleteChoice;