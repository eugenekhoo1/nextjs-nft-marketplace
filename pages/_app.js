import "../styles/globals.css";
import Header from "../components/Header";
import Head from "next/head";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "@web3uikit/core";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/48850/nft-marketplace/v0.0.1",
});

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "goerli";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="nft marketplace crypto" content="NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoralisProvider initializeOnMount={false}>
        <ApolloProvider client={client}>
          <NotificationProvider>
            <Header />
            <Component {...pageProps} />
          </NotificationProvider>
        </ApolloProvider>
      </MoralisProvider>
    </div>
  );
}

export default MyApp;
