import React from "react";
import { useParams } from "react-router-dom";
import Attandances from "./Attandances";
import CountWork from "./CountWork";
import OTK from "./OTK";

const FlowSection = () => {
  const { flowSection } = useParams();

  const flowSectionData = [
    { id: 0, Component: Attandances, name: "attandances" },
    { id: 1, Component: CountWork, name: "count-work" },
    { id: 2, Component: OTK, name: "otk" },
  ];
  return flowSectionData.map(({ id, Component, name }) =>
    name === flowSection ? <Component key={id} /> : ""
  );
};

export default FlowSection;
