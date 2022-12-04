import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiConfig, createClient, useAccount } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./components/Hero";
import ChannelFeed from "./pages/authorPage";
import { chain } from "wagmi";
import { Chat } from "@pushprotocol/uiweb";
const alchemyId = process.env.ALCHEMY_ID;
const chains = [chain.polygonMumbai];
const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
    chains,
  })
);

const App = () => {
  const { address } = useAccount();
  return (
    <WagmiConfig client={client}>
      <ChakraProvider>
        <ConnectKitProvider>
          <Navbar />
          <Chat
            account={address} //user address
            supportAddress="0xebF204f4E9F6394476D42dB740258182144926C0" //support address
            apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
            env="staging"
          />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Hero />}></Route>
              <Route path="/:author" element={<ChannelFeed />}></Route>
            </Routes>
          </BrowserRouter>
        </ConnectKitProvider>
      </ChakraProvider>
    </WagmiConfig>
  );
};

export default App;
