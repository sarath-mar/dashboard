import React from "react";

function HotMenus({ classData, data }) {
  const rating = [1, 2, 3, 4, 5];
  return (
    <div
      className={`shadow-sm  bg-secondary rounded-md middle-section-items ${classData}`}
    >
      <div className="header-sticky mt-2 pl-2">
        <div>Hot Menus</div>
        <hr />
      </div>
      <div className="mt-2 p-2">
        {data.map((details) => (
          <div>
            <div className="flex justify-between items-center gap-5">
              <div className="flex gap-5 items-center">
                <div>
                  <img
                    width={100}
                    src="https://tse1.mm.bing.net/th?id=OIP.4aPit6n2BuSGIICd_RsW7QHaEK&pid=Api&P=0&h=180"
                    alt=""
                  />
                </div>
                <div>
                  <div className="font-medium text-sm">{details.name}</div>
                  <div className="text-xs">{details.description}</div>
                </div>
              </div>
              {/* <div>
            
          </div> */}
              <div>
                <div className="font-semibold text-xl">${details.price}</div>
                <div>
                  {rating.map((x, i) => (
                    <span
                      className={`fa fa-star  star-icon ${
                        i + 1 <= details.rating ? "checked" : ""
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
            <hr className="my-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotMenus;
