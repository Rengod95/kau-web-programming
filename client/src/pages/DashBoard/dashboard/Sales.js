import { Bar } from "react-chartjs-2";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);
export const Sales = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: "#00bf8e",
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 2,
        categoryPercentage: 0.5,
        data: [18, 5, 19, 27, 29, 19, 20],
        label: "금주",
        color: "#00bf8e",
        maxBarThickness: 10,
      },
      {
        backgroundColor: "rgba(255,255, 255, 0.7)",
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 2,
        categoryPercentage: 0.5,
        data: [11, 20, 12, 29, 30, 25, 13],
        label: "지난 주",
        maxBarThickness: 10,
      },
    ],
    labels: [
      "월요일",
      "화요일",
      "수요일 ",
      "목요일",
      "금요일",
      "토요일",
      "일요일",
    ],
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    color: "#fff",
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "rgba(108,99,255,0.7)",
        },
        ticks: {
          color: "#00bf8e",
        },
      },
      y: {
        grid: {
          color: "rgba(108,99,255,0.7)",
        },
        ticks: {
          color: "#00bf8e",
        },
      },
    },
    xAxes: [
      {
        ticks: {
          fontColor: "#fff",
        },
        gridLines: {
          backgroundColor: "#00bf8e",
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: "#fff",
          beginAtZero: true,
          min: 0,
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: "#00bf8e",
          drawBorder: true,
          // zeroLineBorderDash: [2],
          // zeroLineBorderDashOffset: [2],
          zeroLineColor: "#fff",
        },
      },
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: "fff",
      borderColor: "#fff",
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: "#fff",
    },
  };

  return (
    <Card
      {...props}
      sx={{
        backgroundImage:
          "linear-gradient(to right, rgba(69, 44, 146, 0.9) 0%, rgba(50, 44, 130, 0.9) 100%)",
        boxShadow:
          "rgba(0, 0, 0, 0.6) 0px 10px 15px -3px, rgba(11, 4, 127, 0.6) 0px 4px 6px -2px;",
      }}
    >
      <CardHeader
        action={
          <Button
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            variant={"outlined"}
          >
            Last 7 days
          </Button>
        }
        title="시즌방 신청 통계"
        sx={{ color: "#fff", height: 60 }}
      />
      <Divider color={"#6c63ff"} />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          <Bar data={data} options={options} color={"#fff"} />
        </Box>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          p: 2,
          height: 100,
        }}
      >
        <Button
          color="primary"
          variant={"contained"}
          endIcon={<ArrowRightIcon fontSize="large" />}
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};
