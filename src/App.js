import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import HeroSection from './components/hero';

function App() {
  return (
    <div>
      <Navigation/>
      <div className="br"/>
      <HeroSection/>
    </div>
  );
}

export default App;
