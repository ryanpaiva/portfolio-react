import './App.css';
import { Abilities } from './components/abilities/abilities';
import { AboutMe } from './components/about-me/about-me';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Abilities />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
