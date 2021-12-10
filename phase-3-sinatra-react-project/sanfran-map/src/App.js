import { useEffect, useState } from 'react'
import './App.css';
import Map from './Map';
import Display from './Display'
import Navbar from './Navbar'
import AddASuggestion from './AddASuggestion'
import TopRatedNeighborhoods from './TopRatedNeighborhoods';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  const [selected, setSelected] = useState("")
  const [selectedid, setSelectedid] = useState([])
  const [re, setre] = useState(false)
  const [use, setuse] = useState("")

  useEffect(() => {
    fetch(`http://localhost:9292/suggestion`)
    .then ((res) => res.json())
    .then ((data ) => {
         setuse(data)
    })
}, []);

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/TopRatedNeighborhoods' component={TopRatedNeighborhoods} />
      <Route path='/AddASuggestion' component={AddASuggestion} />
      </Switch>
      
      <Map setSelected={setSelected} re={re} setre={setre} setSelectedid={setSelectedid} />
      <Display selected={selected} re={re} selectedid={selectedid} use={use}/>
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
