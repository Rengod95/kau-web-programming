import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";

export const TotalCustomers = (props) => (
  <Card
    {...props}
    sx={{
      backgroundImage:
        "linear-gradient(to right, rgba(69, 44, 146, 0.9) 0%, rgba(50, 44, 130, 0.9) 100%)",
      boxShadow:
        "rgba(0, 0, 0, 0.6) 0px 10px 15px -3px, rgba(11, 4, 127, 0.6) 0px 4px 6px -2px;",
    }}
  >
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="#fff" gutterBottom variant="overline">
            총 회원수
          </Typography>
          <Typography color="#fff" variant="h4">
            1.6k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              height: 56,
              width: 56,
              backgroundColor: "#6c63ff",
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          pt: 2,
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1,
          }}
        >
          16%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
