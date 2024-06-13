import React from "react";
import { dashboardData } from "../../../utils";

function RecievedOrderList({ classData }) {
  const header = [
    {
      title: "Order Id",
    },
    {
      title: "Name",
    },
    {
      title: "Items",
    },
    {
      title: "Quantity",
    },
    {
      title: "Price",
    },
    {
      title: "Status",
    },
  ];
  const itemList = dashboardData.getItemOrderList();
  return (
    <div>
      <div className={`shadow-sm  bg-secondary rounded-md ${classData}`}>
        <div className="header-sticky mt-2 pl-2">
          <div>Latest Orders</div>
          <hr />
        </div>
        <div className="mt-2 p-2">
          <table class="table-auto">
            <thead>
              <tr>
                {header.map((x) => (
                  <th
                    className={`${
                      ["Price", "Quantity"].includes(x.title) ? "md-d-none" : ""
                    }`}
                  >
                    {x.title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {itemList.map((item, index) => (
                <tr>
                  <td>{item.orderId}</td>
                  <td>{item.customerName}</td>
                  <td>{item.name}</td>
                  <td className="md-d-none">{item.quantity}</td>
                  <td className="md-d-none">{item.price}</td>
                  <td
                    className={`${
                      item.orderStatus === "Pending"
                        ? "text-red"
                        : item.orderStatus === "Delivered"
                        ? "text-green"
                        : "text-yellow"
                    }`}
                  >
                    {item.orderStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecievedOrderList;
