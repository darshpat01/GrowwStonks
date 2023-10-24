// make interface for ProductDescription

import LowHigh from "./LowHigh";
import Tags from "./Tags";

const statStyles =
  "border border-black dark:border-white rounded-xl p-4 my-1 min-w-[17%] text-center";

interface ProductDescriptionProps {
  title: string;
  desc: string;
  industry: string;
  sector: string;
  weekLow: string;
  weekHigh: string;
  currentPrice: string;
  dividendYield: string;
  profitMargin: string;
  beta: string;
  peRatio: string;
  marketCap: string;
}

export default function ProductDescription({
  title,
  desc,
  industry,
  sector,
  weekLow,
  weekHigh,
  currentPrice,
  dividendYield,
  profitMargin,
  beta,
  peRatio,
  marketCap,
}: ProductDescriptionProps) {
  return (
    <>
      <div className="mt-2 py-4 dark:bg-cardColor border border-black  rounded-lg">
        <div className="px-6 py-2 ">
          <div className="text-xl font-bold">About {title}</div>
        </div>
        <div className="px-6 pt-2">
          <div className="font-bold mb-2 text-lg">Description: </div>
          <div className=" font-semibold">{desc}</div>
        </div>
        <div className="flex flex-wrap px-6 py-4 items-center justify-start">
          <Tags tagType="INDUSTRY" tag={industry} />
          <Tags tagType="SECTOR" tag={sector} />
        </div>
        <div className="px-6 py-4">
          <LowHigh low={weekLow} high={weekHigh} current={currentPrice} />
        </div>
        <div className="px-6 py-4 flex flex-wrap justify-between">
          <div className={statStyles}>
            <div className="font-bold">Market Cap</div>
            <div>{marketCap}</div>
          </div>
          <div className={statStyles}>
            <div className="font-bold">P/E Ratio</div>
            <div>{peRatio}</div>
          </div>
          <div className={statStyles}>
            <div className="font-bold">Beta</div>
            <div>{beta}</div>
          </div>
          <div className={statStyles}>
            <div className="font-bold">Dividend Yield</div>
            <div>{dividendYield}</div>
          </div>
          <div className={statStyles}>
            <div className="font-bold">Profit Margin</div>
            <div>{profitMargin}</div>
          </div>
        </div>
      </div>
    </>
  );
}
