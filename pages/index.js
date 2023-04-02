import Head from "next/head";
import Navbar from "../components/Header";
import Homepage from "../components/Homepage";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Homepage />
    </div>
  );
}
