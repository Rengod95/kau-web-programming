import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChartOutlined";

export const TasksProgress = (props) => (
  <Card
    sx={{
      height: "100%",
      backgroundImage:
        "linear-gradient(to right, rgba(69, 44, 146, 0.9) 0%, rgba(50, 44, 130, 0.9) 100%)",
      boxShadow:
        "rgba(0, 0, 0, 0.6) 0px 10px 15px -3px, rgba(11, 4, 127, 0.6) 0px 4px 6px -2px;",
    }}
    {...props}
  >
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="#fff" gutterBottom variant="overline">
            예약 처리율
          </Typography>
          <Typography color="#fff" variant="h4">
            75.5%
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "#f7c94b",
              height: 56,
              width: 56,
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress value={75.5} variant="determinate" />
      </Box>
    </CardContent>
  </Card>
);
