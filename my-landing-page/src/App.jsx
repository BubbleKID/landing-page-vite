import './App.sass'
import NavBar  from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="app">
        <NavBar />
        <Hero />
        <Expertise />
        <AboutMe />
        <Portfolio />
        {/* <AboutMe />
        <AboutMe /> */}
    </div>
  )
}

export default App
