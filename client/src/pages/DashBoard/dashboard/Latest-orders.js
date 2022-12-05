import { format } from "date-fns";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SeverityPill } from "./severity-pill";

const orders = [
  {
    id: 1,
    ref: "CDD1049",
    amount: 30.5,
    customer: {
      name: "Ekaterina Tankova",
    },
    createdAt: 1555016400000,
    status: "pending",
  },
  {
    id: 2,
    ref: "CDD1048",
    amount: 25.1,
    customer: {
      name: "Cao Yu",
    },
    createdAt: 1555016400000,
    status: "delivered",
  },
  {
    id: 3,
    ref: "CDD1047",
    amount: 10.99,
    customer: {
      name: "Alexa Richardson",
    },
    createdAt: 1554930000000,
    status: "refunded",
  },
  {
    id: 4,
    ref: "CDD1046",
    amount: 96.43,
    customer: {
      name: "Anje Keizer",
    },
    createdAt: 1554757200000,
    status: "pending",
  },
  {
    id: 5,
    ref: "CDD1045",
    amount: 32.54,
    customer: {
      name: "Clarke Gillebert",
    },
    createdAt: 1554670800000,
    status: "delivered",
  },
  {
    id: 6,
    ref: "CDD1044",
    amount: 16.76,
    customer: {
      name: "Adam Denisov",
    },
    createdAt: 1554670800000,
    status: "delivered",
  },
];

export const LatestOrders = (props) => (
  <Card
    {...props}
    sx={{
      backgroundImage:
        "linear-gradient(to right, rgba(69, 44, 146, 0.9) 0%, rgba(50, 44, 130, 0.9) 100%)",
      boxShadow:
        "rgba(0, 0, 0, 0.6) 0px 10px 15px -3px, rgba(11, 4, 127, 0.6) 0px 4px 6px -2px;",
      width: "100%",
      padding: 2,
    }}
  >
    <CardHeader title="최근 예약 신청 목록" sx={{ color: "#fff" }} />
    <Divider color={"#6c63ff"} />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>신청 ID</TableCell>
              <TableCell sx={{ color: "#fff" }}>유저</TableCell>
              <TableCell sx={{ color: "#fff" }} sortDirection="desc">
                <Tooltip sx={{ color: "#fff" }} enterDelay={300} title="Sort">
                  <TableSortLabel
                    sx={{ color: "#fff" }}
                    active
                    direction="desc"
                  >
                    날짜
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell sx={{ color: "#fff" }}>상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell sx={{ color: "rgba(255,255, 255, 0.7)" }}>
                  {order.ref}
                </TableCell>
                <TableCell sx={{ color: "rgba(255,255, 255, 0.7)" }}>
                  {order.customer.name}
                </TableCell>
                <TableCell sx={{ color: "rgba(255,255, 255, 0.7)" }}>
                  {format(order.createdAt, "dd/MM/yyyy")}
                </TableCell>
                <TableCell sx={{ color: "rgba(255,255, 255, 0.7)" }}>
                  <SeverityPill
                    color={
                      (order.status === "delivered" && "#00bf8e") ||
                      (order.status === "refunded" && "#f75842") ||
                      "#f7c94b"
                    }
                  >
                    {order.status}
                  </SeverityPill>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
