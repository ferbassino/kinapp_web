import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  // fill: true,
  responsive: true,
  // scales: {
  //   y: {
  //     min: 0,
  //   },
  // },
  plugins: {
    legend: {
      display: true,
    },
  },
};

const Chart = ({
  x = [],
  y = [],
  z = [],
  i = [],
  j = [],
  k = [],
  t = [],
  xName = "",
  yName = "",
  zName = "",
  iName = "",
  jName = "",
  kName = "",
  xColor = "",
  yColor = "",
  zColor = "",
  iColor = "",
  jColor = "",
  kColor = "",
}) => {
  const data = useMemo(
    function () {
      let labels = t;

      return {
        datasets: [
          {
            label: xName,
            tension: 0.3,
            data: x,
            borderColor: xColor,
            backgroundColor: xColor,
            pointRadius: 1,
          },
          {
            label: yName,
            tension: 0.5,
            data: y,
            borderColor: yColor,
            backgroundColor: yColor,
            pointRadius: 1,
          },
          {
            label: zName,
            tension: 0.3,
            data: z,
            borderColor: zColor,
            backgroundColor: zColor,
            pointRadius: 1,
          },
          {
            label: iName,
            tension: 0.3,
            data: i,
            borderColor: "#000308",
            backgroundColor: "#000308",
            pointRadius: 1,
          },
          {
            label: jName,
            tension: 0.3,
            data: j,
            borderColor: "#208080",
            backgroundColor: "#208080",
            pointRadius: 1,
          },
          {
            label: kName,
            tension: 0.3,
            data: k,
            borderColor: "#752080",
            backgroundColor: "#752080",
            pointRadius: 1,
          },
        ],
        labels,
      };
    },
    [x, y, z, i, j, k, t]
  );

  return <Line data={data} options={options} />;
};
export default Chart;
