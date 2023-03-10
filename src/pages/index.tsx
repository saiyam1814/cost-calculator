import Head from "next/head";
import { Inter } from "@next/font/google";
import CostCalculator from "@/components/CivoCalculator/CostCalculator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Civo Cost Calculator</title>
        <meta name="description" content="Calculator to calculate Civo Cloud Infrastruture Cost" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#0F273E] min-h-screen pb-2">
        <CostCalculator />
      </main>
    </>
  );
}
