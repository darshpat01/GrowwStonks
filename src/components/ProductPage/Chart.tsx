"use client";
import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";

export default function Chart() {
  const [data, setData] = useState([]);
  const [time, setTime] = useState("1D");

  const not_selected_timeStyle =
    "text-lg font-bold py-1 px-2 cursor-pointer rounded-full";
  const selected_timeStyle =
    "text-lg font-bold py-1 px-2 cursor-pointer rounded-full bg-orange-500";

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  return (
    <>
      <div className="border border-black dark:border-white rounded-lg my-2  px-6 py-4">
        <Line
          data={data}
          padding="auto"
          xField="Date"
          yField="scales"
          xAxis={{
            tickCount: 5,
          }}
          yAxis={{
            grid: { line: { style: { lineWidth: 0 } } },
          }}
          smooth
        />
        <div className="flex items-center justify-center">
          <div className="flex border border-black dark:border-white rounded-full mt-6 p-2">
            <div
              className={
                time === "1D" ? selected_timeStyle : not_selected_timeStyle
              }
              onClick={() => {
                if (time !== "1D") {
                  setTime("1D");
                }
              }}
            >
              1D
            </div>
            <div
              className={
                time === "1W" ? selected_timeStyle : not_selected_timeStyle
              }
              onClick={() => {
                if (time !== "1W") {
                  setTime("1W");
                }
              }}
            >
              1W
            </div>
            <div
              className={
                time === "1M" ? selected_timeStyle : not_selected_timeStyle
              }
              onClick={() => {
                if (time !== "1M") {
                  setTime("1M");
                }
              }}
            >
              1M
            </div>
            <div
              className={
                time === "3M" ? selected_timeStyle : not_selected_timeStyle
              }
              onClick={() => {
                if (time !== "3M") {
                  setTime("3M");
                }
              }}
            >
              3M
            </div>
            <div
              className={
                time === "6M" ? selected_timeStyle : not_selected_timeStyle
              }
              onClick={() => {
                if (time !== "6M") {
                  setTime("6M");
                }
              }}
            >
              6M
            </div>
            <div
              className={
                time === "1Y" ? selected_timeStyle : not_selected_timeStyle
              }
              onClick={() => {
                if (time !== "1Y") {
                  setTime("1Y");
                }
              }}
            >
              1Y
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
