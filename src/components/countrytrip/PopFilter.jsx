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
  return `${value} stars`;
}

export default function PopFilter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Popularity
      </Typography>
      <Slider
        defaultValue={3}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={5}
      />
    </div>
  );
}
