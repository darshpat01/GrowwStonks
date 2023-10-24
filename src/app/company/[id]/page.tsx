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
  const [tickerData, setTickerData] = useState<any>({});
  const [gainersLosers, setGainersLosers] = useState<any>([]);
  const [data, setData] = useState<Company>({
    Name: "None",
    Description: "None",
    Sector: "None",
    Industry: "None",
    Country: "None",
    MarketCapitalization: "None",
    EBITDA: "None",
    AssetType: "None",
    WeekHigh52: "None",
    WeekLow52: "None",
    "52WeekHigh": "None",
    "52WeekLow": "None",
    DividendYield: "None",
    ProfitMargin: "None",
    Beta: "None",
    PERatio: "None",
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
        setGainersLosers(data);
        const topGainers = data.top_gainers.map((gainer: any) => {
          return {
            ...gainer,
            ticker: gainer.ticker.replace(/[+=-]/g, ""),
          };
        });
        const topLosers = data.top_losers.map((loser: any) => {
          return {
            ...loser,
            ticker: loser.ticker.replace(/[+=-]/g, ""),
          };
        });
        const tickerDataArray = [...topGainers, ...topLosers];
        const tickerDataFiltered = tickerDataArray.filter(
          (item) => item.ticker === params.id
        )[0];

        setTickerData(tickerDataFiltered);
      });
  }, []);

  // search for the params.id in the topGainers and topLosers

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
          currentPrice={tickerData.price}
          change={tickerData.change_percentage}
          profitloss={
            parseInt(tickerData.change_amount) > 0 ? "increase" : "decrease"
          }
        />

        <Chart ticker={params.id} />

        <ProductDescription
          title={data.Name}
          desc={data.Description}
          sector={data.Sector}
          industry={data.Industry}
          // AssetType={data.AssetType}
          currentPrice={tickerData.price}
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
