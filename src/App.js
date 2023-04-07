
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Experience from './components/experience';
import Nav from './components/nav';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/> 

     
    </div>
  );
}

export default App;
