import { VectorMap } from "@south-paw/react-vector-maps";
import worldMapJson from "./worldMapJson.js";
import styled from "styled-components";
import React, { useState } from "react";

const WorldMap = (props) => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered(""),
    onClick: ({ target }) => setClicked(target.attributes.name.value),
  };

  const Map = styled.div`
    margin: 1rem auto;

    svg {
      stroke: #fff;

      path {
        fill: #a82b2b;
        outline: none;

        // When a layer is 'selected' (via currentLayers prop).
        &[aria-current="true"] {
          fill: #382ba8;
        }
      }
    }
  `;
  return (
    <React.Fragment>
      <Map>
        <VectorMap
          {...worldMapJson}
          layerProps={layerProps}
          currentLayers={props.highlight}
        />
      </Map>
      <p>Hovered: {hovered && <code>{hovered}</code>}</p>
      <p>Clicked: {clicked && <code>{clicked}</code>}</p>
    </React.Fragment>
  );
};

export default WorldMap;
