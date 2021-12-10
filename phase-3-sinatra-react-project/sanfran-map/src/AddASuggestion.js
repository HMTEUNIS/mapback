import { useEffect, useState } from 'react'
function AddASuggestion ({selected, selectedid}){
    const [hoods, sethoods] = useState ([])
    const [users, setUsers] = useState ([])
    const [localyn, setlocalyn] = useState (false)

    useEffect(() => {
        fetch(`http://localhost:9292/neighborhood`)
        .then ((res) => res.json())
        .then ((data ) => {
             sethoods(data)
        })
      }, []);
      useEffect(() => {
        fetch(`http://localhost:9292/user`)
        .then ((res) => res.json())
        .then ((data ) => {
             setUsers(data)
        })
      }, []);

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

// function createUser (e) {
//     e.preventDefault()

// const newUser = {
//     name: name,
//     local: localyn,
//     age: 30
    
// }

function handleSubmit (e) {
    e.preventDefault()
    const newUser = {
        name: name,
        local: localyn,
        age: 30
        
    }
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

    if (name.length > 3) {
    
    console.log(newUser)

    fetch('http://localhost:8001/user', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
      .then(res => res.json())
      .then(data => {
        console.log("test");
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });


    
   

console.log('POST', newSugg)

    fetch('http://localhost:9292/suggestion', {
    method: 'POST', 
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(newSugg),
    })
    .then(res => res.json())
    .then(data => {
    console.log("test");

    })
    .catch((error) => {
    console.error('Error:', error);
    });
} else 

console.log('POST', newSugg)

fetch('http://localhost:9292/suggestion', {
method: 'POST', 
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(newSugg),
})
.then(res => res.json())
.then(data => {
console.log("test");

})
.catch((error) => {
console.error('Error:', error);
    })}

    return (
    
    
  <div>
  <form onSubmit={handleSubmit}>
    <div className="comment form">
    <select name="user" id="user" onChange={e => setUID(e.target.value)}>
        { users.map (user =>
   <option value= {user.id} key= {user.id} >{user.name}</option >)
      }
    <option value={users.length + 1} >New User</option >
</select>
<input type="text" name="name" placeholder="New User? what's your name?" onChange={e => setName(e.target.value)}/>
<select name="local" id="local" onChange={e => setlocalyn(e.target.value)}> 
   <option value="true" >Local</option >
 <option value="false" >Visitor</option >
 
</select>

<br />


    <select name="neighborhood" id="neighborhood" onChange={e => setNID(e.target.value)}>
        { hoods.map (hood =>
   <option value= {hood.id} key= {hood.id} >{hood.name}</option >)
      }
</select>
Rating:
<select name="rating" id="rating" onChange={e => setR(e.target.value)}> 
   <option value="1" >1</option >
 <option value="2" >2</option >
 <option value="3" >3</option >
 <option value="4" >4</option >
 <option value="5" >5</option >
      
</select>
    <input type="text" name="eat" placeholder="eat!" onChange={e => setE(e.target.value)} />
    <input type="text" name="learn" placeholder="learn!" onChange={e => setL(e.target.value)}/>
    <input type="text" name="watch" placeholder="watch!" onChange={e => setW(e.target.value)}/>
    <input type="text" name="do" placeholder="do!" onChange={e => setD(e.target.value)} />
    <br />
    <input type="text" name="comment" placeholder="comment?" onChange={e => setC(e.target.value)}/>

    

  </div>
  <button className="ui button" type="submit">Add Tip! </ button>
  </ form>
   </ div>
    )
}
export default AddASuggestion