"use client";
import { useState, useEffect, Suspense } from "react";
import getGainersLosers from "@/libs/getGainersLosers";
import TopGainerLosers from "../components/TopGainerLoser";

// import { addTopGainersLosers } from "@/redux/feature/companies-slice";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "@/redux/store";

export default function Home() {
  const [choice, setChoice] = useState("gainers");
  const [data, setData] = useState([]);

  // const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    try {
      getGainersLosers().then((data) => {
        setData(data);
        console.log(data);
        // dispatch(addTopGainersLosers(data));
      });
    } catch (error) {}
  }, []);

  const class1 = "text-lg font-bold px-2 py-1 cursor-pointer mb-4 mr-2";
  const class2 =
    "text-lg font-bold px-2 py-1  border-2  border-x-0 border-t-0 border-b-growwOrange dark:border-b-growwOrange cursor-pointer mb-4 mr-2";
  return (
    <>
      <div className="p-4 h-full">
        <div className="flex">
          <div
            className={choice === "gainers" ? class2 : class1}
            onClick={() => {
              if (choice !== "gainers") {
                setChoice("gainers");
              }
            }}
          >
            Top Gainers
          </div>
          <div
            className={choice === "losers" ? class2 : class1}
            onClick={() => {
              if (choice !== "losers") {
                setChoice("losers");
              }
            }}
          >
            Top Losers
          </div>
        </div>
        <div className="max-h-full">
          <TopGainerLosers choice={choice} data={data} />
        </div>
        <div className="flex justify-center mt-6">
          <div className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full font-bold cursor-pointer hover:scale-105 hover:shadow-md transition transform">
            Load More
          </div>
        </div>
      </div>
    </>
  );
}
