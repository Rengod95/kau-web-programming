import React from "react";
import { Budget } from "./dashboard/Budget";
import { TotalCustomers } from "./dashboard/Total-customers";
import { TasksProgress } from "./dashboard/Tasks-progress";
import { TotalProfit } from "./dashboard/Total-profit";
import { Sales } from "./dashboard/Sales";
import { TrafficByDevice } from "./dashboard/Traffic-by-device";
import { LatestOrders } from "./dashboard/Latest-orders";
import { LatestProducts } from "./dashboard/Latest-products";

import classes from "./DashBoard.module.scss";
const DashBoard = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Layout}>
        <div className={classes.Top}>
          <Budget />
          <TotalCustomers />
          <TasksProgress />
          <TotalProfit />
        </div>
        <div className={classes.Middle}>
          <Sales />
          <TrafficByDevice />
        </div>
        <div className={classes.Bottom}>
          <LatestOrders />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
