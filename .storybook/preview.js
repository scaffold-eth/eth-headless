import React from "react";
import { EthersAppContext } from "eth-hooks/context";

export const decorators = [
  (Story) => (
    <EthersAppContext>
      <Story />
    </EthersAppContext>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
