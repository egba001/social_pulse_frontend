import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const formatNumAbbreviation = (value) => {
    const suffixes = ["", "k", "M", "B", "T"];
    const suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = parseFloat(
      (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
    );
    if (shortValue % 1 !== 0) {
      shortValue = shortValue.toFixed(1);
    }
  
    return shortValue + suffixes[suffixNum];
  };
  

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      usePointStyle: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        padding: 10,
      }
    },
    y: {
      ticks: {
        callback: (value) => formatNumAbbreviation(value),
        stepSize: 1,
        padding: 12,
      },
      border: {
        display: false,
      },
      min: 0,
      max: 10,
    },
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];

const data = {
  labels,
  datasets: [
    {
      label: "Positive",
      data: [1, 6, 8, 5, 7, 4, 7, 3, 6, 2],
      borderColor: "#2446A9",
      backgroundColor: "#2446A9",
    },
    {
      label: "Negative",
      data: [2, 1, 5, 3, 6, 8, 9, 3, 5, 7],
      borderColor: "#DB1B1B",
      backgroundColor: "#DB1B1B",
    },
    {
      label: "Neutral",
      data: [1, 2, 5, 6, 7, 9, 3, 5, 6, 2],
      borderColor: "#111111",
      backgroundColor: "#111111",
    },
  ],
};

export const LineChart = () => {
  return (
    <div className="w-full">
      <Line options={options} data={data} />
    </div>
  );
};
