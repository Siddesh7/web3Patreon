import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { ChakraProvider } from "@chakra-ui/react";
import Hero from "./components/Hero";
import ChannelFeed from "./pages/authorPage";
import { chain } from "wagmi";
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
  return (
    <WagmiConfig client={client}>
      <ChakraProvider>
        <ConnectKitProvider>
          <Navbar />
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
