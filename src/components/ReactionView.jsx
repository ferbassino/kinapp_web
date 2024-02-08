import React from "react";
import reactionAnalysis from "../auxiliaries/reactionAnalysis";
import Chart from "./Chart";

function ReactionView({
  accX = {},
  accY = {},
  accZ = {},
  testTime = {},
  accT = {},
}) {
  const {
    arrayXCeroMin,
    reactionTimeArray,
    reactionTime,
    side,
    arrayXCeroMinTime,
  } = reactionAnalysis(accX, accY, accZ, testTime);

  return (
    <>
      <div>ReactionView</div>
      <div>reaction time: {reactionTime.toFixed(3)} s</div>
      <Chart
        x={arrayXCeroMin}
        xName="a-x"
        xColor="green"
        y={reactionTimeArray}
        yName="a-y"
        yColor="red"
        // z={accZ}
        // zName="a-z"
        // zColor="blue"
        t={arrayXCeroMinTime}
      />
    </>
  );
}

export default ReactionView;
