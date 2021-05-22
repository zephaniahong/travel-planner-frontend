import { VectorMap } from "@south-paw/react-vector-maps";
import worldMapJson from "./worldMapJson.js";

const WorldMap = () => {
  return <VectorMap {...worldMapJson} />;
};

export default WorldMap;
