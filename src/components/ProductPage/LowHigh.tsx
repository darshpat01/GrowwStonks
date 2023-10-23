interface LowHighProps {
  low: string;
  high: string;
  current: string;
}

import { BiSolidDownArrow } from "react-icons/bi";

export default function LowHigh({
  low,
  high,
  current,
}: {
  low: string;
  high: string;
  current: string;
}) {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div>
          <div>52-Week Low</div>
          <div>${low}</div>
        </div>
        <div className="px-8 w-full">
          <div className="grid justify-items-center pb-1">
            <div>Current Price : ${current}</div>
            <BiSolidDownArrow />
          </div>
          <hr className="border border-black w-full rounded-xl h-1 bg-black dark:border-white dark:bg-white" />
        </div>
        <div className="text-right">
          <div>52-Week High</div>
          <div>${high}</div>
        </div>
      </div>
    </>
  );
}
