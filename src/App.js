
import './App.css';
import ScrollToTop from './components/scrolltotop';
import Header from './components/header';
import Footer from './components/footer';
import Experience from './components/experience';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/projects';


function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/> 

     
    </div>
  );
}

export default App;
