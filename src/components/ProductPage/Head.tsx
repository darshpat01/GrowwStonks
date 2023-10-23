interface HeadProps {
  name: string;
  symbol: string;
  currentPrice: string;
  change: string;
}

export default function Head({
  name,
  symbol,
  currentPrice,
  change,
}: HeadProps) {
  return (
    <>
      <div className="mt-2 px-6 py-2">
        <div className="flex flex-wrap justify-between">
          <div>
            <div className="text-2xl font-bold">{name}</div>
            <div className="font-semibold">{symbol}</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">${currentPrice}</div>
            <div>{change}</div>
          </div>
        </div>
      </div>
    </>
  );
}
