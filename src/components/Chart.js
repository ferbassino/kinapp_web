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
  aspectRatio: 1.5,
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
  t = [],
  xName = "",
  yName = "",
  zName = "",
  xColor = "",
  yColor = "",
  zColor = "",
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
        ],
        labels,
      };
    },
    [x, y, z, t]
  );

  return <Line data={data} options={options} />;
};
export default Chart;
