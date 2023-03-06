
import './App.css';
import ScrollToTop from './components/scrolltotop';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Nav from './components/nav';
import About from './components/about';


function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Header/>
      <Nav/>
      <About/>
      <Homepage/>
      <Footer/> 

     
    </div>
  );
}

export default App;
