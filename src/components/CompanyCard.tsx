import {
  StatGroup,
  StatNumber,
  StatHelpText,
  StatArrow,
  Stat,
} from "@chakra-ui/react";
import Link from "next/link";
interface CompanyCard {
  ticker: String;
  value: String;
  percent: String;
  profitloss?: string;
}
export default function CompanyCard({
  ticker,
  value,
  percent,
  profitloss,
}: CompanyCard) {
  // hover styles for company card in tailwind with transform and animation

  const hoverStyles = "hover:scale-105 hover:shadow-lg transition transform";
  return (
    <>
      <div
        className={
          "px-4 py-2 border border-black dark:border-white rounded-lg " +
          hoverStyles
        }
      >
        <Link href={`/company/${ticker}`}>
          <div>{ticker}</div>
          <StatGroup>
            <Stat>
              <StatNumber>{value}</StatNumber>
              <StatHelpText>
                <StatArrow
                  type={profitloss as "increase" | "decrease" | undefined}
                />
                {percent}
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Link>
      </div>
    </>
  );
}
