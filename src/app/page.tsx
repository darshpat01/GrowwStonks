"use client";
import { useState, useEffect, Suspense } from "react";
import getGainersLosers from "@/libs/getGainersLosers";
import TopGainerLosers from "../components/TopGainerLoser";
import { addTopGainersLosers } from "@/redux/feature/companies-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

export default function Home() {
  const [choice, setChoice] = useState("gainers");
  const [data, setData] = useState([]);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    try {
      getGainersLosers().then((data) => {
        setData(data);
        dispatch(addTopGainersLosers(data));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const class1 = "text-lg font-bold px-2 py-1 cursor-pointer mb-4 mr-2";
  const class2 =
    "text-lg font-bold px-2 py-1  border-2 border-x-0 border-t-0 border-b-black dark:border-b-white cursor-pointer mb-4 mr-2";

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
      </div>
    </>
  );
}
