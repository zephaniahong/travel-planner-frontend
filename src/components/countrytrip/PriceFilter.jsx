import React, { useState } from "react";
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
  return `$${value}`;
}

export default function PriceFilter({ setCost }) {
  const classes = useStyles();
  const [price, setPrice] = useState([50, 450]);

  function handleChange(event, newPrice) {
    setPrice(newPrice);
    setCost(newPrice);
  }

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Cost Range / Day
      </Typography>
      <Slider
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0}
        max={9999}
      />
    </div>
  );
}
