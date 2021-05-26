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
  return `${Number(value)}`;
}

export default function PopFilter({ setPopularity }) {
  const classes = useStyles();

  function handleChange(event, val) {
    const numStars = val;
    setPopularity(numStars);
  }

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
        step={0.5}
        marks
        min={1}
        max={5}
        onChange={handleChange}
      />
    </div>
  );
}
