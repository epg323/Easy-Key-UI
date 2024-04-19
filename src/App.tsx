import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import './App.css';
import { config } from './library/wagmiConfig';
// import Header from './components/Header';
import Home from './pages/Home';

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {/* <Header /> */}
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<div>hi</div>} />
              <Route path="/sms-code" element={<div>hi</div>} />
              <Route path="/wallet" element={<div>hi</div>} />
              <Route path="/send" element={<div>hi</div>} />
            </Routes>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
