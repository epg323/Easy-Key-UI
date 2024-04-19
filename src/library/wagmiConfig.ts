// import {http, createConfig} from 'wagmi'
import {mainnet, sepolia, arbitrum} from 'wagmi/chains'
import {
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

export const config = getDefaultConfig({
  appName: "YapYield", 
  projectId: projectId,
  chains: [mainnet, sepolia, arbitrum]
})

