import {useState, useEffect} from 'react'
function TopRatedNeighborhoods() {
    const [best, setbest] = useState([])
    useEffect(() => {
        fetch(`http://localhost:9292/neighborhood/best`)
        .then ((res) => res.json())
        .then ((data ) => {
             setbest(data)
        })
    }, []);
   console.log(best)
    return (<div>
        {best.map (el => <span key={el.id}>{el.name}</span>)}
        </ div>
    )

}

export default TopRatedNeighborhoods
