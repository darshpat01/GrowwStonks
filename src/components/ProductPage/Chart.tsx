"use client";
import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";

export default function Chart({ ticker }: any) {
  const [data, setData] = useState<any>([]);
  const [time, setTime] = useState("1D");
  const [yAxisMin, setYAxisMin] = useState(null);
  const [yAxisMax, setYAxisMax] = useState(null);

  const not_selected_timeStyle =
    "text-lg font-bold py-1 px-2 cursor-pointer rounded-full";
  const selected_timeStyle =
    "text-lg font-bold py-1 px-2 cursor-pointer rounded-full bg-orange-500";

  useEffect(() => {
    asyncFetch();
  }, [time]);

  const asyncFetch = () => {
    // fetch(
    //   "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    // )
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => {
    //     console.log("fetch data failed", error);
    //   });
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&interval=60min&apikey=${process.env.ALPHAVANTAGE_API_KEY}}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // Process the data to match the required format
        const chartData = Object.keys(json["Time Series (Daily)"]).map(
          (timestamp) => {
            const dataPoint = json["Time Series (Daily)"][timestamp];
            return {
              Date: timestamp,
              Close: parseFloat(dataPoint["4. close"]), // Round the close value to 2 decimal places
            };
          }
        );
        const closeValues = chartData.map((item) => item.Close);
        const minClose = Math.min(...closeValues);
        const maxClose = Math.max(...closeValues);
        setData(chartData);
        console.log(chartData);
      })
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  return (
    <>
      <div className="border border-black dark:bg-cardColor rounded-lg my-2  px-6 pt-8 py-4">
        <Line
          data={data}
          padding="auto"
          xField="Date"
          yField="Close"
          xAxis={{
            tickCount: 5,
          }}
          yAxis={{
            grid: { line: { style: { lineWidth: 0 } } },
            min: yAxisMin, // Set the minimum value for the y-axis
            max: yAxisMax, // Set the maximum value for the y-axis
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
