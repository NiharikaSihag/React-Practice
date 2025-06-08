// const fruits = ['Apple', 'Banana', 'Orange'];
//  const fruitList = fruits.map((fruit, index) => {
//        return <li key={index}>{fruit}</li>
//     })
//     function Card(){
//         return(<>
//         <h3>Fruits:</h3>
//         <ul>{fruitList}</ul>
//         </>)
//     }
// export default Card;

const fruits = ['Apple',['Black ', 'Blue'], 'Banan', 'Orange']
const fruitList = fruits.map((fruit, index) => {
    return ( <li key={index}>{fruit}</li> )
})
function Card(){
    return (
        <>
        <h3>Fruits:</h3>
        <ul>{fruitList}</ul>
        </>
    )
}

export default Card