import { useState } from "react";
import { BigNumber, utils } from "ethers";
import { useBalance } from "eth-hooks";

export interface BalanceProps {
  address: string;
}

export interface BalanceProps {
  address: string;
  price?: number;
  balance?: BigNumber;
  dollarMultiplier?: number;
}

export interface UseBalanceResult {
  displayBalance: string;
  toggleMode: () => void;
}

export const Balance = (props: BalanceProps): UseBalanceResult => {
  const [dollarMode, setDollarMode] = useState(true);
  const [balance] = useBalance(props.address);

  let resolvedBalance = BigNumber.from(balance ?? 0);
  if (balance != null) {
    resolvedBalance = BigNumber.from(balance);
  }

  let floatBalance = parseFloat("0.00");
  if (resolvedBalance) {
    const etherBalance = utils.formatEther(resolvedBalance);
    floatBalance = parseFloat(etherBalance);
  }

  let displayBalance = floatBalance.toFixed(4);
  const price = props.price ?? props.dollarMultiplier;
  if (price && dollarMode) {
    displayBalance = "$" + (floatBalance * price).toFixed(2);
  }

  const toggleMode = () => {
    setDollarMode(!dollarMode);
  };

  return {
    displayBalance,
    toggleMode,
  };
};

const useDollarMode = () => {
  const [dollarMode, setDollarMode] = useState(true);

  const toggleMode = () => {
    setDollarMode(!dollarMode);
  };

  return {
    dollarMode,
    toggleMode,
  };
};
