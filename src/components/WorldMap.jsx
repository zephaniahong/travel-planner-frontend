import { VectorMap } from "@south-paw/react-vector-maps";
import worldMapJson from "./worldMapJson.js";
import styled from "styled-components";
import React, { useState, useContext } from "react";
import { PlanningContext } from "../store";

const Map = styled.div`
  margin: 2.5rem auto;

  svg {
    stroke: #fff;
    max-height: 700px;
    path {
      fill: #687980;
      // cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: #a0937d;
      }

      // // When a layer is focused.
      // &:focus {
      //   fill: rgba(168, 43, 43, 0.6);
      // }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current="true"] {
        fill: #a0937d;
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
        <p className="text-center">
          Hovered: <br />
          {hovered && <code className="text-secondary">{hovered}</code>}
        </p>
        {/* <p>Clicked: {clicked && <code>{clicked}</code>}</p> */}
      </Map>
    </React.Fragment>
  );
};

export default WorldMap;
