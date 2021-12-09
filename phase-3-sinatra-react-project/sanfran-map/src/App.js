import { useState } from 'react'
import './App.css';
import Map from './Map';
import Display from './Display'
import Navbar from './Navbar'
import BestEats from './BestEats';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  const [selected, setSelected] = useState("")
  const [selectedid, setSelectedid] = useState([])
  const [re, setre] = useState(false)

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/BestEats' component={BestEats} />
      </Switch>
      
      <Map setSelected={setSelected} re={re} setre={setre} setSelectedid={setSelectedid} />
      <Display selected={selected} re={re} selectedid={selectedid}/>
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
