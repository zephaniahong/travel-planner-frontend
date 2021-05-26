import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import countries from "../countries.js";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LocFilter({ country }) {
  const classes = useStyles();
  const [select, setSelect] = useState(country);

  useEffect(() => {
    setSelect(country);
  }, [country]);

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="location-filter">Country: {select}</InputLabel>
        <Select
          labelId="location-filter"
          id="location-filter"
          value={select}
          onChange={handleChange}
        >
          {countries.map((country) => {
            return <MenuItem value={country}>{country}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
