import type {AppProps} from 'next/app'
import {ApolloProvider} from "@apollo/client";
import client from '../../apollo-client';
import '../../styles/globals.css'
import Layout from "../containers/Layout";

function MyApp({Component, pageProps}: AppProps) {
    return <ApolloProvider client={client}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
}

export default MyApp
