import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const TotalProfit = (props) => (
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
            총 이익
          </Typography>
          <Typography color="#fff" variant="h4">
            ₩2,321,113원
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "#f75842",
              height: 56,
              width: 56,
            }}
          >
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
