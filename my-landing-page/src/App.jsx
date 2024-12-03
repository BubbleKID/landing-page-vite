import './App.sass'
import NavBar  from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Feedback from './components/Feedback/Feedback';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
        <NavBar />
        <Hero />
        <Expertise />
        <AboutMe />
        <Portfolio />
        <Feedback />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default App
