import React from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 400,
    color: "white",
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function DayFilter({ setNumDays }) {
  const classes = useStyles();

  function handleChange(event, value) {
    setNumDays(value);
  }

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        No. of Days
      </Typography>
      <Slider
        defaultValue={7}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={30}
        onChange={handleChange}
      />
    </div>
  );
}
