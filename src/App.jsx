import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import DesignPortfolio from './components/DesignPortfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'


const PROFILE = {
  email: 'mathenjwasicelo7@gmail.com',
  linkedin: 'www.linkedin.com/in/sicelo-theophilus-mathenjwa-66541842a',
  github: 'https://github.com/Sxcelo777',
  location: 'Durban, KwaZulu-Natal, South Africa',
}

function App() {
  return (
    <>
      <Nav github={PROFILE.github} linkedin={PROFILE.linkedin} />
      <main>
        <Hero github={PROFILE.github} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <DesignPortfolio />
        <Contact {...PROFILE} />
      </main>
      <Footer email={PROFILE.email} linkedin={PROFILE.linkedin} github={PROFILE.github} />
    </>
  )
}

export default App
