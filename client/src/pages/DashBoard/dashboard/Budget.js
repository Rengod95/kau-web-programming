import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";

export const Budget = (props) => (
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
            시즌방 신청량
          </Typography>
          <Typography color="#fff" variant="h4">
            24k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "#00bf8e",
              height: 56,
              width: 56,
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1,
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
