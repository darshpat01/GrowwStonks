// make interface for ProductDescription

import LowHigh from "./LowHigh";
import Tags from "./Tags";

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
      <div className="mt-2 border border-black dark:border-white rounded-lg">
        <div className="px-6 py-2 border border-t-0 border-l-0 border-r-0 border-b-black dark:border-b-white">
          <div className="text-lg font-bold">About {title}</div>
        </div>
        <div className="px-6 py-2">
          <div className=" font-semibold">{desc}</div>
        </div>
        <div className="flex flex-wrap px-6 py-4 items-center justify-start">
          <Tags tagType="Industry" tag={industry} />
          <Tags tagType="Sector" tag={sector} />
        </div>
        <div className="px-6 py-4">
          <LowHigh low={weekLow} high={weekHigh} current={currentPrice} />
        </div>
        <div className="px-6 py-4 flex flex-wrap justify-between">
          <div>
            <div className="font-bold">Market Cap</div>
            <div>{marketCap}</div>
          </div>
          <div>
            <div className="font-bold">P/E Ratio</div>
            <div>{peRatio}</div>
          </div>
          <div>
            <div className="font-bold">Beta</div>
            <div>{beta}</div>
          </div>
          <div>
            <div className="font-bold">Dividend Yield</div>
            <div>{dividendYield}</div>
          </div>
          <div className="px-8">
            <div className="font-bold">Profit Margin</div>
            <div>{profitMargin}</div>
          </div>
        </div>
      </div>
    </>
  );
}
