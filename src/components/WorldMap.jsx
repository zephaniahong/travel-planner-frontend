import { VectorMap } from "@south-paw/react-vector-maps";
import worldMapJson from "./worldMapJson.js";
import React, { useState } from "react";

const WorldMap = () => {
  const [hovered, setHovered] = useState("None");
  const [clicked, setClicked] = useState("None");

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered("None"),
    onClick: ({ target }) => setClicked(target.attributes.name.value),
  };

  return (
    <React.Fragment>
      <VectorMap {...worldMapJson} layerProps={layerProps} />
      <p>Hovered: {hovered && <code>{hovered}</code>}</p>
      <p>Clicked: {clicked && <code>{clicked}</code>}</p>
    </React.Fragment>
  );
};

export default WorldMap;
