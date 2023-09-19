import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import dotenv from 'dotenv';

dotenv.config();
const underConstruction = process.env.UNDER_CONTRUCTION;

export default function Home() {
  if (underConstruction === 'true') {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-6 h-screen">
        <div className="flex flex-col items-center justify-center w-5/12 h-full">
          <div className="flex flex-col items-center justify-center w-full h-full">
            Under construction... It will be ready soon! I promise!
          </div>
          <Footer />
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 h-screen">
      <div className="flex flex-col items-center justify-center w-5/12 h-full">
        <Header />
          <div className="flex flex-col items-center justify-center w-full h-full">
            {/* My code would be here. If I had any. :'(  */}
          </div>
        <Footer />
      </div>
    </main>
  );
}
