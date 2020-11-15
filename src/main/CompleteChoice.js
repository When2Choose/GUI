import React from "react";
import {FormControlLabel, FormControl, FormLabel, RadioGroup, Radio} from '@material-ui/core';
import "./CompleteChoice.css"

function CompleteChoice() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="CompleteChoice">
            <FormControl component="fieldset">
                <FormLabel component="legend">Complete choice</FormLabel>
                <RadioGroup aria-label="alternatives" name="alternatives" value={value} onChange={handleChange}>
                    {[0, 1, 2, 3].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;
                        return (
                            <FormControlLabel value={labelId} control={<Radio/>} label="test"/>
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default CompleteChoice;