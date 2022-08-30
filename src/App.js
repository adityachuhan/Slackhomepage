import logo from './logo.svg';
import './App.css';
import Pnavbar from './Components/navbar/Pnavbar';
import Mainhome from './Components/Mainhome';
import Testimonial from './Components/Testimonial';
import Ladder from './Components/Ladder';
import Accolades from './Components/Accolades';
import Caedbox from './Components/Caedbox';
import Offer from './Components/Offer';
import Lownav from './Components/Lownav';
import Mnavbar from './Components/navbar/Mnavbar';

function App() {
  return (
    <>
    <Pnavbar logo = {logo}/>
    <Mnavbar logo = {logo}/>
    <Mainhome/>
    <Testimonial/>
    <Ladder/>
    <Accolades/>
    <Caedbox/>
    <Offer/>
    <Lownav logo = {logo}/>
    </>
  );
}

export default App;
