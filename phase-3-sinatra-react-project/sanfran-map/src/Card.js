function Card ({use, selectedid, sorted, el}){
   
    console.log("in card", sorted)
    return (
        <>
        
        <p>Eat: {el.eat} </p>
        <p>Learn: {el.learn}</p>
        <p>Do: {el.do}</p>
        <p>Watch: {el.watch} </p>
    </>
    )
}

export default Card