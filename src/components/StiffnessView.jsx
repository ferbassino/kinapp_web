import React from "react";
import translationAnalysis from "../auxiliaries/translationAnalysis";
import ChartAxis from "./ChartAxis";
import Header from "./Header";
import Title from "./Title";
import SubTitle from "./SubTitle";
import SubTitle2 from "./Subtitle2";
import jumpProcess from "../auxiliaries/jumpProcess";
import { useEffect } from "react";
import stiffnessAnalysis from "../auxiliaries/stiffnessAnalysis";
import Table from "react-bootstrap/Table";

function StiffnessView({ accY, accT, masa, testTime }) {
  const {
    stiffnessData,
    arrayYCentral,
    arrayYCentral0F,
    arrayYCentral0,
    timeArrayYCentral0,
    arrayAccTime,
  } = stiffnessAnalysis(accY, testTime, masa);
  //   console.log(timeArrayYCentral0);
  return (
    <div>
      <ChartAxis
        y={arrayYCentral0}
        yColor={"#fa020f"}
        yName={"a"}
        t={timeArrayYCentral0}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>⌚</th>
            <th>flight time</th>
            <th>contact time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{stiffnessData.tV23.toFixed(3)} s</td>
            <td>{stiffnessData.tC34.toFixed(3)} s</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{stiffnessData.tV45.toFixed(3)} s</td>
            <td>{stiffnessData.tC56.toFixed(3)} s</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{stiffnessData.tV67.toFixed(3)} s</td>
            <td>{stiffnessData.tC78.toFixed(3)} s</td>
          </tr>
        </tbody>
      </Table>
      <h3>Stiffness: {stiffnessData.stiffness} N/m</h3>
    </div>
  );
}

export default StiffnessView;
