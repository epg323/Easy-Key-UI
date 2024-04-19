import { FC, useEffect } from 'react';
import { useAccount, useContractRead } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import yakLogo from '@public/yak-logo.png';

const smallABI = [
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

// const uniContract = {
//   address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
//   abi: smallABI,
//   functionName: 'getSupply'
// }

const Header: FC = () => {
  const { address } = useAccount();

  const { data } = useContractRead({
    abi: smallABI,
    address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    functionName: 'totalSupply',
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <img src={yakLogo} alt="yak logo" width={45} height={45} />
      <ConnectButton />
      {/* <span>Address: {address}</span> */}
      <span>Uni Supply: {data?.toString()}</span>
    </div>
  );
};

export default Header;
