import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { getDraft, getCompleted } from "../api";
export default function Example() {
  const [draftCount, setDraftCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    getDraft().then((data) => {
      setDraftCount(data.length);
    });

    getCompleted().then((data) => {
      setCompletedCount(data.length);
    });
  }, []);

  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Cars",
        data: [completedCount, draftCount],
      },
    ],
    options: {
      chart: {
        toolbar: { show: false },
        animations: {
          enabled: true, 
        },
      },
      dataLabels: { enabled: false },
      colors: ["#22c55e", "#FFDE21"], 
      plotOptions: {
        bar: {
          columnWidth: "50%",
          borderRadius: 4,
        },
      },
      xaxis: {
        categories: ["Completed", "Draft"],
        axisTicks: { show: false },
        axisBorder: { show: false },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
          },
        },
      },
      grid: {
        borderColor: "#ddd",
        strokeDashArray: 5,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <Card>
      <CardHeader floated={false} shadow={false} color="transparent">
        <Typography variant="h6">Car Status</Typography>
      </CardHeader>

      <CardBody className="px-2 pb-0">
        <Chart
          {...chartConfig}
        />
      </CardBody>
    </Card>
  );
}