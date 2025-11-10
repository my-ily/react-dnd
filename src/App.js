import logo from './logo.svg';
import './App.css';
import { PetCard } from './component/PetCard';
import { Basket } from './component/Basket';
import Cards from './component/Cards';
import CardContainer from './component/CardContainer';
function App() {
  return (
    <div className="App">
     {/* <PetCard/>
     <Basket/> */}
     <div className='flex flex-col'>
     <Cards/>
     <CardContainer/>
     </div>
    </div>
  );
}

export default App;
