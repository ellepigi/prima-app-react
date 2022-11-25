import { useState } from "react"
import "./style.css";



function Newtodolist (){

   
const [array, setArray] = useState ([])
const [stringa, setStringa] = useState ("")

const handleChange = (e) => {setStringa(e.target.value)}

const handleSubmit = (e) => {
    
     e.preventDefault()
let array2= [...array, stringa]
setArray(array2)

}

const buttonClick = (e) => {
    
 let arrayprovvisiorio = [...array]
 arrayprovvisiorio.splice (e.target.id, 1)
setArray(arrayprovvisiorio)


}

const inputChange = (e, index) => {

let arraymodifica = [...array]
arraymodifica[index] = e.target.value
setArray(arraymodifica)    
}

const handleModifica = (e, index) => {

    document.getElementById("input"+index).disabled=false;

}

const handleBlur = (e, index) => {

    document.getElementById("input"+index).disabled=true;

}




    return(
        <div className="container">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}  />
            <button type="submit" > Aggiungi</button>
            {array.map((value, index) => (<li key={index}><input value={value} type="text"  disabled={true} id={"input"+index} onChange={(e)=>inputChange(e, index)} 
            onBlur={(e)=>handleBlur(e, index)}/>
            <button type="button" onClick={buttonClick} id={index}>X</button>
            <button type="button" onClick={(e)=>handleModifica(e, index)}>Modifica</button></li>))}
        </form>
        </div>
    )
}


export default Newtodolist;