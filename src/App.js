import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
        <div className="main_root">
          <Navbar />
          <Main />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
    </>
  );
}

export default App;
