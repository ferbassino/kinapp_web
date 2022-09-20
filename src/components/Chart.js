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

const Chart = ({ x, y, z, t }) => {
  const data = useMemo(function () {
    let labels = t;

    return {
      datasets: [
        {
          label: `Eje x`,
          tension: 0.3,
          data: x,
          borderColor: "blue",
          backgroundColor: "rgba(3, 11, 252, 0.3)",
          pointRadius: 1,
        },
        {
          label: `Eje y`,
          tension: 0.3,
          data: y,
          borderColor: "red",
          backgroundColor: "rgba(247, 2, 2, 0.3)",
          pointRadius: 1,
        },
        {
          label: `Eje Z`,
          tension: 0.3,
          data: z,
          borderColor: "green",
          backgroundColor: "rgba(43, 247, 2, 0.3)",
          pointRadius: 1,
        },
      ],
      labels,
    };
  }, []);

  return <Line data={data} options={options} />;
};
export default Chart;
