import Head from "next/head";
import Navbar from "./Navbar/";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Mykola Grytsai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="max-w-screen-md px-4 py-12 mx-auto">
          { children }
      </main>

      <Footer year = {'2024'} />
    </div>
  );
}
