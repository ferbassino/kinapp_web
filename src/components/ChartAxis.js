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

const ChartAxis = ({
  y = [],
  t = [],
  yName = "",
  yColor = "",
  zColor = "",
}) => {
  const data = useMemo(
    function () {
      let labels = t;

      return {
        datasets: [
          {
            label: yName,
            tension: 0.5,
            data: y,
            borderColor: yColor,
            backgroundColor: yColor,
            pointRadius: 1,
          },
        ],
        labels,
      };
    },
    [y, t]
  );

  return <Line data={data} options={options} />;
};
export default ChartAxis;
