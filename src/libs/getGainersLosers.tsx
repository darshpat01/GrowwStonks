export default async function getGainersLosers() {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.ALPHAVANTAGE_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("failed to fetch users");
  }

  return await res.json();
}
