import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatNumber,
} from "@chakra-ui/react";

interface HeadProps {
  name: string;
  symbol: string;
  currentPrice: string;
  change: string;
  profitloss?: string;
}

export default function Head({
  name,
  symbol,
  currentPrice,
  change,
  profitloss,
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
            <StatGroup>
              <Stat>
                <StatNumber>{currentPrice}</StatNumber>
                <StatHelpText>
                  <StatArrow
                    type={profitloss as "increase" | "decrease" | undefined}
                  />
                  {change}
                </StatHelpText>
              </Stat>
            </StatGroup>
          </div>
        </div>
      </div>
    </>
  );
}
