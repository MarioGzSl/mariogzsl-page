import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"

export default function Home() {

  const onAbout = () => {
    console.log('About')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 h-screen">
      <div className="flex flex-col items-center justify-center w-5/12 h-full">
        <Header/>
        <div className="flex flex-col items-center justify-center w-full h-full">
          Under construction... It will be ready soon! I promise!
        </div>
        <Footer/>
      </div>
    </main>
  )
}
