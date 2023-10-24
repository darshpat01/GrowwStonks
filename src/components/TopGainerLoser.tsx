import CompanyCard from "./CompanyCard";

interface Selection {
  choice: String;
  data: any;
}

export default function TopGainerLosers({ choice, data }: Selection) {
  // if data is empty, show loading
  if (data.length === 0) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  } else {
  }

  return (
    <>
      <main>
        {choice === "gainers" ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
            {data.top_gainers &&
              data.top_gainers.map((company: any) => (
                <CompanyCard
                  key={company.ticker.replace(/[+=-]/g, "")}
                  ticker={company.ticker.replace(/[+=-]/g, "")}
                  value={company.price}
                  percent={company.change_percentage}
                  profitloss="increase"
                />
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
            {data.top_losers &&
              data.top_losers.map((company: any) => (
                <CompanyCard
                  key={company.ticker.replace(/[+=-]/g, "")}
                  ticker={company.ticker.replace(/[+=-]/g, "")}
                  value={company.price}
                  percent={company.change_percentage}
                  profitloss="decrease"
                />
              ))}
          </div>
        )}
      </main>
    </>
  );
}
