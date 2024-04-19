import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Logo from './components/Logo';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './library/wagmiConfig';
import Header from './components/Header';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Header />
          <div>
            <Logo />
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button type="button" onClick={() => setCount((counter) => counter + 1)}>
              count is
              {count}
            </button>
            <p>
              Edit
              <code>src/App.tsx</code>
              and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
