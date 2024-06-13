import React from "react";
import CommonBarChart from "../../../common-components/CommonBarChart";

function TrendingCards({ cardDetail, children }) {
  return (
    <div className="shadow-sm p-2 bg-secondary rounded-md">
      {/* <div className="flex justify-end">
        <i className="fa-solid fa-bars cursor-pointer"></i>
      </div> */}
      <div className="flex justify-between p-5 items-center">
        <div>
          <div className={`rounded-icon text-${cardDetail?.color}`}>
            <i className={`fa-solid ${cardDetail?.icon} text-${cardDetail?.color}`}></i> 
          </div>
          <div className={`text-xl font-semibold text-${cardDetail?.color}`}>{cardDetail.title}</div>
          <div className="text-md">{cardDetail.subTitle}</div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default TrendingCards;
