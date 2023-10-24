"use client";
import ProductDescription from "@/components/ProductPage/ProductDescription";
import { useState, useEffect, Suspense } from "react";
// import { useAppSelector } from "@/redux/store";
import Head from "@/components/ProductPage/Head";
import Chart from "@/components/ProductPage/Chart";

interface Company {
  Name: string;
  Description: string;
  Sector: string;
  Industry: string;
  Country: string;
  MarketCapitalization: string;
  EBITDA: string;
  AssetType: string;
  WeekHigh52: string;
  WeekLow52: string;
  "52WeekHigh": string;
  "52WeekLow": string;
  DividendYield: string;
  ProfitMargin: string;
  Beta: string;
  PERatio: string;
}

export default function Page({ params }: { params: { id: string } }) {
  const [tickerData, setTickerData] = useState<any>([]);
  const [data, setData] = useState<Company>({
    Name: "Loreum Ipsum",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis pharetra tellus. Nullam purus lorem, tincidunt sodales commodo sit amet, volutpat sit amet lacus. Ut placerat ultricies sapien sed scelerisque. Aenean dapibus maximus nulla, nec fermentum eros accumsan eu. Donec pellentesque, dui fringilla interdum molestie, neque ligula egestas diam, vel egestas diam eros sed elit. Duis eu purus massa. Vivamus vehicula metus ac justo placerat imperdiet.",
    Sector: "N/A",
    Industry: "N/A",
    Country: "N/A",
    MarketCapitalization: "N/A",
    EBITDA: "N/A",
    AssetType: "N/A",
    WeekHigh52: "N/A",
    WeekLow52: "N/A",
    "52WeekHigh": "N/A",
    "52WeekLow": "N/A",
    DividendYield: "N/A",
    ProfitMargin: "N/A",
    Beta: "N/A",
    PERatio: "N/A",
  });

  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.id}&apikey=${process.env.ALPHAVANTAGE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    fetch(
      `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.ALPHAVANTAGE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTickerData(data);
      });
  }, []);

  // const TopGainerLosers = useAppSelector((state) => state.companyReducer.value);

  // const tickerData = [
  //   ...TopGainerLosers.topGainers,
  //   ...TopGainerLosers.topLosers,
  // ].filter((item) => item.ticker === params.id)[0];

  // show loading if data is empty

  if (data.Name === "") {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <main className="pb-4">
        <Head
          name={data.Name}
          symbol={params.id}
          currentPrice="10"
          change="10"
        />
        <Chart />
        <ProductDescription
          title={data.Name}
          desc={data.Description}
          sector={data.Sector}
          industry={data.Industry}
          // AssetType={data.AssetType}
          currentPrice="10"
          weekHigh={data["52WeekHigh"]}
          weekLow={data["52WeekLow"]}
          dividendYield={data.DividendYield}
          profitMargin={data.ProfitMargin}
          beta={data.Beta}
          peRatio={data.PERatio}
          marketCap={data.MarketCapitalization}
        />
        {/* load more */}
      </main>
    </>
  );
}
