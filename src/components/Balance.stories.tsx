import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Balance } from "./Balance";

const BalanceComponent: React.FC = () => {
  const { displayBalance, toggleMode } = Balance({
    address: "0xaCF16886eFa51FF0957EF321B8510e53D67d1D7c",
  });

  return (
    <div>
      <button onClick={toggleMode}>Toggle Mode</button>
      <div>{displayBalance}</div>
    </div>
  );
};

export default {
  title: "Balance",
  component: BalanceComponent,
} as ComponentMeta<typeof BalanceComponent>;

export const Primary: ComponentStory<typeof BalanceComponent> = () => (
  <BalanceComponent></BalanceComponent>
);
