import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { Analytics } from '@vercel/analytics/react';

const underConstruction = true;

export default function Home() {
  if (underConstruction) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-6 h-screen">
        <div className="flex flex-col items-center justify-center w-5/12 min-w-[450px] h-full">
          <Header />
          <div className="flex flex-col items-center justify-center w-full h-full">
            Under construction... It will be ready soon! I promise!
          </div>
          <Footer />
        </div>
        <Analytics />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 h-screen">
      <div className="flex flex-col items-center justify-center w-5/12 h-full">
        <Header />
          <div className="flex flex-col items-center justify-center w-full h-full">
            <About />
          </div>
        <Footer />
      </div>
    </main>
  );
}
