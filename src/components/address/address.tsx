import { useResolveEnsName } from 'eth-hooks/dapps';
import { TEthersProvider } from 'eth-hooks/models';

export interface AddressProps {
  address: string;
  ensProvider?: TEthersProvider;
  blockExplorer?: string;
}

export interface AddressResult {
  shortAddress: string;
  ensName?: string;
  explorerLink: string;
}

const blockExplorerLink = (address: string, blockExplorer?: string): string =>
  `${blockExplorer || 'https://etherscan.io/'}address/${address}`;

export const useAddress = (props: AddressProps): AddressResult => {
  const address = props.address;
  const [ensName] = useResolveEnsName(props.ensProvider, address);
  const explorerLink = blockExplorerLink(address, props.blockExplorer);

  const shortAddress = address ? `${address.substring(0, 5)}...${address.substring(address.length - 4)}` : '';

  return {
    shortAddress,
    ensName,
    explorerLink,
  };
};
