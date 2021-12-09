import { useState } from 'react'
import './App.css';
import Map from './Map';
import Display from './Display'
import Navbar from './Navbar'
import TopRatedNeighborhoods from './TopRatedNeighborhoods'
import BestEats from './BestEats';
import TopRatedEvents from './TopRatedEvents'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  const [selected, setSelected] = useState("")
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/TopRatedEvents' component={TopRatedEvents} />
      <Route path= '/TopRatedNeighborhoods' component={TopRatedNeighborhoods} />
      <Route path='/BestEats' component={BestEats} />
      </Switch>
      <Display selected={selected} />
      <Map setSelected={setSelected} />
     
    </div>
    </Router>
  );
}

const Home = () => (
  <div className='Home'>
    <h1>San Franciso, California</h1>
  </div>
)

export default App;
