
import './App.css';
import ScrollToTop from './components/scrolltotop';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/homepage';


function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Header/>
      <Homepage/>
      <Footer/> 

     
    </div>
  );
}

export default App;
