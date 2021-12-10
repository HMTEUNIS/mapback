import {useState} from "react"
import {Link} from "react-router-dom"

const Navbar = ()=> {
    return (
           <div>
              <ul id="nav">
                
                <Link to='TopRatedNeighborhoods'>
                <li><a href="#">Top Rated Neighborhoods</a></li>
                </Link>
                <Link to='AddASuggestion'>
                <li><a href="#">Add A Tip Of Your Own!</a></li>
                </Link>
              </ul>
            </div>
    )

}

export default Navbar