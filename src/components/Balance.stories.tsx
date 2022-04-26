import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Balance } from './Balance';

const BalanceComponent: React.FC = () => {
  const { displayBalance, toggleMode } = Balance({
    address: '0x0000000000000000000000000000000000000000',
  });

  return (
    <div>
      <button onClick={toggleMode}>Toggle Mode</button>
      <div>{displayBalance}</div>
    </div>
  );
};

export default {
  title: 'Balance',
  component: BalanceComponent,
} as ComponentMeta<typeof BalanceComponent>;

export const Primary: ComponentStory<typeof BalanceComponent> = () => <BalanceComponent></BalanceComponent>;
