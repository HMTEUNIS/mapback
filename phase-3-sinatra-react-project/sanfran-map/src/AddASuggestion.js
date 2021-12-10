import { useEffect, useState } from 'react'
function AddASuggestion ({selected, selectedid}){
    const [hoods, sethoods] = useState ([])

    useEffect(() => {
        fetch(`http://localhost:9292/neighborhood`)
        .then ((res) => res.json())
        .then ((data ) => {
             sethoods(data)
        })
      }, []);
      console.log("hoods", hoods)

const [E, setE] = useState("")
const [L, setL] = useState("")
const [W, setW] = useState("")
const [D, setD] = useState("")
const [R, setR] = useState(2)
const [C, setC] = useState("")
const [NID, setNID] = useState(2)
const [UID, setUID] = useState(2)
const [A, setA] = useState('')
const [name, setName] =useState('')

function handleSubmit (e) {
    e.preventDefault()
    const newSugg = {
        eat: E,
        learn: L,
        watch: W,
        do: D,
        rating: parseInt(R),
        comment: C,
        neighborhood_id: parseInt(NID),
        user_id: parseInt(UID)
    }
console.log("sel", selectedid)
console.log('POST', newSugg)}

    // fetch('http://localhost:9292/suggestion', {
    // method: 'POST', 
    // headers: {
    // 'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(newSugg),
    // })
    // .then(res => res.json())
    // .then(data => {
    // console.log("test");

    // })
    // .catch((error) => {
    // console.error('Error:', error);
    // });
    // setE("")
    // setL('')
    // setD('')
    // setW('')
    // setR("")
    // setC("")
    // }

    return (
    
    /* <div className="new user">
    <input type="text" name="name" placeholder="name?" onChange={e => setName(e.target.value)} />
    <input type="number" name="age" placeholder="age?" step="1" onChange={e => setA(e.target.value)} />
<input type="text" name="local" placeholder="local?" />

  </div>
  <button className="ui button" type="submit"> </ button> */
  <div>
  <form onSubmit={handleSubmit}>
    <div className="comment form">
    <input type="text" name="eat" placeholder="eat!" onChange={e => setE(e.target.value)} />
    <input type="text" name="learn" placeholder="learn!" onChange={e => setL(e.target.value)}/>
    <input type="text" name="watch" placeholder="watch!" onChange={e => setW(e.target.value)}/>
    <input type="text" name="do" placeholder="do!" onChange={e => setD(e.target.value)} />
    <select name="rating" id="rating" onChange={e => setR(e.target.value)}> 
   <option value="1" >1</option >
 <option value="2" >2</option >
 <option value="3" >3</option >
 <option value="4" >4</option >
 <option value="5" >5</option >)
      
</select>

    <select name="neighborhood" id="neighborhood" onChange={e => setNID(e.target.value)}>
        { hoods.map (hood =>
   <option value= {hood.id} >{hood.name}</option >)
      }
</select>

  </div>
  <button className="ui button" type="submit">Add Tip! </ button>
  </ form>
   </ div>
    )
}
export default AddASuggestion