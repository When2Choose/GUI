import React from "react";
import {
    FormControlLabel,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    Button,
    Grid,
    Paper, Typography
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
            case "alternative1":
            case "alternative2":
            case "alternative3":
            case "alternative4":
            case "alternative5":
                setError(false);
                break;
            default:
                setError(true);
                break;
        }
    };

    return (
        <div className="CompleteChoice">
            <Grid container justify="center" direction="row" spacing={3} xs={12} className="CompleteGrid">
                <Grid item>
                    <Paper className="Paper">
                        <Typography variant="h3">Complete choice</Typography>
                        <form onSubmit={handleSubmit}>
                            <FormControl component="fieldset" error={error}>
                                <FormLabel component="legend">Choose the best alternative</FormLabel>
                                <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleChange}
                                            className="FormControl">
                                    <Grid container justify="center" direction="row" spacing={3} xs={12}
                                          className="CompleteGrid">
                                        <Grid item>
                                            <Paper variant="elevation" color="default" className="Paper2">
                                                <FormControlLabel value="alternative1" control={<Radio/>}
                                                                  className="AlternativeOption" label="Insert a lot of
                                        text here, you know how it be, lorum ipsum dolor in da
                                        house. I need more text here, so I'm going to start telling you all about Arun. Arun is a guy
                                        who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                                        things at WPI"/>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper variant="elevation" color="default" className="Paper2">
                                                <FormControlLabel value="alternative2" control={<Radio/>}
                                                                  className="AlternativeOption" label="Insert a lot of
                                        text here, you know how it be, lorum ipsum dolor in da
                                        house. I need more text here, so I'm going to start telling you all about Arun. Arun is a guy
                                        who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                                        things at WPI"/>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper variant="elevation" color="default" className="Paper2">
                                                <FormControlLabel value="alternative3" control={<Radio/>}
                                                                  className="AlternativeOption" label="Insert a lot of
                                        text here, you know how it be, lorum ipsum dolor in da
                                        house. I need more text here, so I'm going to start telling you all about Arun. Arun is a guy
                                        who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                                        things at WPI"/>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper variant="elevation" color="default" className="Paper2">
                                                <FormControlLabel value="alternative4" control={<Radio/>}
                                                                  className="AlternativeOption" label="Insert a lot of
                                        text here, you know how it be, lorum ipsum dolor in da
                                        house. I need more text here, so I'm going to start telling you all about Arun. Arun is a guy
                                        who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                                        things at WPI"/>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper variant="elevation" color="default" className="Paper2">
                                                <FormControlLabel value="alternative5" control={<Radio/>}
                                                                  className="AlternativeOption" label="Insert a lot of
                                    text here, you know how it be, lorum ipsum dolor in da
                                    house. I need more text here, so I'm going to start telling you all about Arun. Arun is a guy
                                    who does a lot of stuff, like coding and taking classes and courses and lots of of teaching
                                    things at WPI"/>
                                            </Paper>
                                            <Grid item className="SubmitButtonItem">
                                                <Button type="submit" variant="contained" color="default" size="large"
                                                        className="SubmitButton">
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </RadioGroup>

                            </FormControl>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default CompleteChoice;