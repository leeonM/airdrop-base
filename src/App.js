import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Second from './components/Second';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <Second />
       <Newsletter />
       <Footer />
    </div>
  );
}

export default App;
