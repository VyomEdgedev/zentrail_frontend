import "@/styles/globals.css";
import Layout from "../layout/layout";
import Layout1 from "../layout/layout1";
import Head from "next/head";
import { Geist, Geist_Mono ,DM_Sans} from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-dm-sans",
});
const layouts = {
  default: Layout,
  layout1: Layout1,
};
export default function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || layouts.default;
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable}`}>
      <Head>
        <title>zentrail</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
