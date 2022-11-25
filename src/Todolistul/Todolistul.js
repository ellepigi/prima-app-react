function Todolistul ({array}){
    return (
        <div className="list"> 
        <ul>
                {array.map((value, index) => (<><li key={index} >{value}<button >X</button></li></>) )}
        </ul>
        </div>
    )
}

export default Todolistul