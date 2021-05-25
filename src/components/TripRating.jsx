import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function TripRating() {
  const [val, setVal] = useState(0);

  return (
    <>
      <Box component="fieldset" mb={2} borderColor="transparent">
        <Typography component="legend">Trip Reviews:</Typography>
        <Rating name="simple-controlled" defaultValue={val} readOnly />
      </Box>
    </>
  );
}
