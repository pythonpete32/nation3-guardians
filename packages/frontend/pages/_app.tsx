import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { NextUIProvider } from "@nextui-org/react";

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.goerli,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
      : []),
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Nation3 Guardians",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider>
          <RainbowKitProvider chains={chains}>
            <NextUIProvider>
              <Component {...pageProps} />
            </NextUIProvider>
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;
