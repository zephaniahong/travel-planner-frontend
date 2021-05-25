import { VectorMap } from "@south-paw/react-vector-maps";
import worldMapJson from "./worldMapJson.js";
import styled from "styled-components";
import React, { useState, useContext } from "react";
import { PlanningContext } from "../store";

const Map = styled.div`
  margin: 1rem auto;

  svg {
    stroke: #fff;

    path {
      fill: #a82b2b;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: rgba(168, 43, 43, 0.83);
      }

      // When a layer is focused.
      &:focus {
        fill: rgba(168, 43, 43, 0.6);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current="true"] {
        fill: #382ba8;
      }
    }
  }
`;

const WorldMap = (props) => {
  const { store } = useContext(PlanningContext);
  const { highlightedCountry } = store;
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [focused, setFocused] = useState(null);

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered(""),
    onFocus: ({ target }) => setFocused(target.attributes.name.value),
    onClick: ({ target }) => setClicked(target.attributes.name.value),
  };

  return (
    <React.Fragment>
      <Map>
        <VectorMap
          {...worldMapJson}
          layerProps={layerProps}
          currentLayers={highlightedCountry}
        />
      </Map>
      <p>Hovered: {hovered && <code>{hovered}</code>}</p>
      <p>Clicked: {clicked && <code>{clicked}</code>}</p>
    </React.Fragment>
  );
};

export default WorldMap;
