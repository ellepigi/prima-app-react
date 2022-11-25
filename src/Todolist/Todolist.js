import { useState } from "react";
import Todolistform from "../Todolistform/Todolistform";
import Todolistul from "../Todolistul/Todolistul";

function Todolist (){
    const [array, setArray] = useState ([]);
    const [stringa, setStringa] = useState ("")

    
    

    const stampa= ()=> {console.log ("stampa")};
    const handleChange = (e)=> {console.log (e.target.value)
     setStringa(e.target.value)
    // array.push(stringa)
    
   };

    const submit = (e) => { e.preventDefault();
    console.log ("ok")
    let arrayTemporaneo = [...array, stringa]
    setArray(arrayTemporaneo)
    setStringa("")

} 
    // let array= ["task 1", "task 2", "task 3"]
    
    return (
    <div>
         {/* <form action="" onSubmit={submit}>
         <input type="text" onChange={handleChange} value={stringa} />
          <button type="submit" onClick={stampa}>Aggiungi</button>
          </form> */}
          <Todolistform submit={submit} handleChange={handleChange} stringa={stringa} stampa={stampa} />
          <Todolistul array={array} />
     {/* <div className="list"> 
    <ul>
            {array.map((value, index) => (<li key={index} >{value}</li>) )}
    </ul>
    </div> */}
    </div>
    )
}

export default Todolist;