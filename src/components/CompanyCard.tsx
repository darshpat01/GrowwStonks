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
  return (
    <>
      <Link href={`/company/${ticker}`}>
        <div className="p-2 border border-black dark:border-white rounded-lg">
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
        </div>
      </Link>
    </>
  );
}
