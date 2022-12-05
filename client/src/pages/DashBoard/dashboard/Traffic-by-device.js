import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PhoneIcon from "@mui/icons-material/Phone";
import TabletIcon from "@mui/icons-material/Tablet";

export const TrafficByDevice = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: ["#00bf8e", "#6c63ff", "#f7c94b"],
        borderWidth: 8,
        borderColor: "transparent",
        hoverBorderColor: "transparent",
      },
    ],
    labels: ["시즌 예약", "장기 예약", "단기 예약"],
    labelColors: {
      color: "#fff",
    },
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    title: {
      color: "#fff",
    },
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const devices = [
    {
      title: "시즌 예약",
      value: 63,
      icon: LaptopMacIcon,
      color: "#00bf8e",
    },
    {
      title: "장기 예약",
      value: 15,
      icon: TabletIcon,
      color: "#6c63ff",
    },
    {
      title: "단기 예약",
      value: 23,
      icon: PhoneIcon,
      color: "#f7c94b",
    },
  ];

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
      <CardHeader title="신청 종류 비율" sx={{ color: "#fff", height: 60 }} />
      <Divider color={"#6c63ff"} />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 5,
                textAlign: "center",
                gap: 5,
              }}
            >
              <Icon sx={{ color: "#fff" }} />
              <Typography color="#fff" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
