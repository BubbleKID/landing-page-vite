import './App.sass'
import NavBar  from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import AboutMe from './components/AboutMe/AboutMe';
function App() {
  return (
    <div className="app">
       Test Landing Page
        <NavBar />
        <Hero />
        <Expertise />
        <AboutMe />
    </div>
  )
}

export default App
