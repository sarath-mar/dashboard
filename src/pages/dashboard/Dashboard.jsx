import React, { useEffect, useState } from "react";
import TrendingCards from "./components/TrendingCards";
import "./Dashboard.css";
// import masterData from "../../utils/index";

import CommonBarChart from "../../common-components/CommonBarChart";
import CommonLineChart from "../../common-components/CommonLineChart";
import { dashboardData } from "../../utils";
import CommonPieChart from "../../common-components/CommonPieChart";
import HotMenus from "./components/HotMenus";
import RecievedOrderList from "./components/RecievedOrderList";
function Dashboard() {
  const cardDetails = [{ icon: "", mainContent: "", subContent: "" }];
  //   const [barChartData, setBarChartData] = useState([]);
  useEffect(() => {
    // console.log( dashboardData.getAllMenusRating());
    // console.log(dashboardData.customersModeByDate());
    // setBarChartData(dashboardData.customersByDate());
  }, []);
  const barChartDetails = {
    height: 120,
    width: 150,
    dataKeyX: "name",
    dataKey: "totalPrice",
    color: "green",
  };
  const lineChartDetails = {
    height: 120,
    width: 150,
    dataKeyX: "name",
    dataKeyOne: "online",
    dataKeyTwo: "offline",
    isMuliple: true,
  };
  const lineChartUserDetails = {
    height: 120,
    width: 150,
    dataKeyX: "name",
    dataKeyOne: "newUser",
    isMuliple: false,
  };
  const pieChartMenuDetails = {
    height: 120,
    width: 150,
    dataKeyValue: "value",
  };
  const earningData = {
    title: dashboardData.earningByDate()?.totalEarnings?.toFixed(2) || 0,
    subTitle: "Total Earning",
    color: "green",
    icon: "fa-dollar-sign",
  };
  const orderData = {
    title: dashboardData.orderModeByDate()?.totalOrder || 0,
    subTitle: "Total Orders",
    color: "blue",
    icon: "fa-cart-shopping",
  };
  const userData = {
    title: dashboardData.totalUserByDate()?.totalUser || 0,
    subTitle: "Total Users",
    color: "red",
    icon: "fa-user",
  };
  const menuData = {
    title: dashboardData.getAllMenusRating()?.menus?.length || 0,
    subTitle: "Total Menus",
    color: "yellow",
    icon: "fa-bowl-food",
  };
  const barChartData = dashboardData.earningByDate()?.dailyTotalsArray || [];
  const lineChartData = dashboardData.orderModeByDate()?.dailyOrderArray || [];
  const lineChartUserData =
    dashboardData.totalUserByDate()?.dailyUsersArray || [];
  const menus = dashboardData.getAllMenusRating()?.menus;
  const trendingMenus = dashboardData.getAllMenusRating()?.trendingMenus;
  const pieChartMenuData = [
    {
      name: "Trending Orders",
      value: dashboardData.getAllMenusRating()?.trendingMenus?.length || 0,
    },
    {
      name: "Other Orders",
      value: menus?.length - trendingMenus?.length,
    },
  ];

  return (
    <div className="dashboard">
      <div className="trending-card gap-5">
        <div className="trending-card gap-5">
          <TrendingCards cardDetail={earningData}>
            <CommonBarChart details={barChartDetails} data={barChartData} />
          </TrendingCards>
          <TrendingCards cardDetail={orderData}>
            <CommonLineChart details={lineChartDetails} data={lineChartData} />
          </TrendingCards>
        </div>
        <div className="trending-card gap-5">
          <TrendingCards cardDetail={userData}>
            <CommonLineChart
              details={lineChartUserDetails}
              data={lineChartUserData}
            />
          </TrendingCards>
          <TrendingCards cardDetail={menuData}>
            <CommonPieChart
              details={pieChartMenuDetails}
              data={pieChartMenuData}
            />
          </TrendingCards>
        </div>
      </div>
      <div className="middle-section mt-5  gap-5 flex ">
        <div className="hot-menus ">
          <HotMenus data={trendingMenus} classData={"middle-section-items"} />
        </div>
        <div className="order-list ">
          <RecievedOrderList
            classData={"middle-section-items"}
            // data={itemList}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
