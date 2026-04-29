import Ticker from './components/Ticker'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Creators from './components/Creators'
import TaglineGenerator from './components/TaglineGenerator'
import ApplyForm from './components/ApplyForm'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Ticker />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Creators />
        <TaglineGenerator />
        <ApplyForm />
      </main>
      <Footer />
    </>
  )
}
