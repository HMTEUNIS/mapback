import {useState} from "react"
import {Link} from "react-router-dom"

const Navbar = ()=> {
    return (
           <div>
              <ul id="nav">
                <Link to='/'>
                <li><a href="#">Home</a></li>
                </Link>
                <Link to='TopRatedNeighborhoods'>
                <li><a href="#">Top Rated Neighborhoods</a></li>
                </Link>
                <Link to='BestEats'>
                <li><a href="#">Best Eats</a></li>
                </Link>
                <Link to='TopRatedEvents'>
                <li><a href="#">Top Rated Events</a></li>
                </Link>
              </ul>
            </div>
    )

}

export default Navbar