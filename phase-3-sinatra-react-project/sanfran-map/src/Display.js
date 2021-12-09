import Card from './Card'
import { useEffect, useState } from 'react'

function Display ({selected, selectedid, re}) {
    const [data, setdata] = useState("")
    const [use, setuse] = useState("")
    const [sorted, setsorted] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:9292/neighborhood`)
    //     .then ((res) => res.json())
    //     .then ((data ) => {
    //          setdata(data)
    //     })
    // }, []);
   
    useEffect(() => {
        fetch(`http://localhost:9292/suggestion`)
        .then ((res) => res.json())
        .then ((data ) => {
             setuse(data)
        })
    }, []);
    const handleSort = (selectedid) => {
        const nids = use.filter (sObj => sObj.neighborhood_id === parseInt(selectedid))
       
        console.log("nids", nids)
    }
    // setsorted(handleSort())
    console.log(typeof selectedid)
    console.log("sprted", sorted)
    return (
        <div className="displaydiv">
            <p>{selected}</p>
            <button onClick={(e) =>handleSort(e.target.target)}>maybe</button>
            <div>{use ?
                <Card use={use} selectedid={selectedid} /> : null
}{console.log("use", use)}
</div>
        </div>
    )
}
export default Display 