import Card from './Card'
import { useEffect, useState } from 'react'

function Display ({selected, selectedid, re}) {
    const [data, setdata] = useState("")
    const [use, setuse] = useState("")
    const [sorted, setsorted] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/suggestion`)
        .then ((res) => res.json())
        .then ((data ) => {
             setuse(data)
        })
    }, []);
    function load (e){
        const nids = use.filter (sObj => sObj.neighborhood_id === selectedid)
       
        setsorted(nids)
    }
   
   
    console.log("sprted", sorted)
    return (
        <div className="displaydiv">
            <p>{selected}</p>
            <div>{use ? sorted.map(el =>  <Card key={el.id} el={el} /> )
                : null}
</div>
<button onClick={e =>load()}>Take A Look</button>
        </div>
    )
}
export default Display 