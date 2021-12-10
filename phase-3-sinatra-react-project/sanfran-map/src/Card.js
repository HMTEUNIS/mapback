import {useState, useEffect} from 'react'
function Card ({el, id, selectedid}){
    const [rating, setrating] = useState("")
    function deleteItems(e) {
		
			fetch(`http://localhost:9292/suggestion/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				}
			})
			.then(resp => resp.json())
			.then(item => console.log(item));
            
		};

        useEffect(() => {
            fetch(`http://localhost:9292/neighborhood/${selectedid}`)
            .then ((res) => res.json())
            .then ((data ) => {
                 setrating(data)
            })
        }, []);
        console.log(rating)
    return (
        <>
        <p>Average Rating {rating} / 5</p>
        <p>Eat: {el.eat} </p>
        <p>Learn: {el.learn}</p>
        <p>Do: {el.do}</p>
        <p>Watch: {el.watch} </p>
        <button onClick={e => deleteItems()}>Delete</button>
    </>
    )
}

export default Card