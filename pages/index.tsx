import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Main App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Main Page</h1>
    </div>
  );
};

export default Home;
