import Card from '../Card/Card';
import daticard from '../Card/dati.json'
import Newtodolist from '../Newtodolist/Newtodolist';
import Todolist from '../Todolist/Todolist';

function Main (){
    
   
    let array= [1, 2, 3, 4]
    return (
         
        <div>
        <main >
            {array}
            {daticard.cards.map ((elementi) => (<Card prezzo={elementi.price} etichette={elementi.etichette} key={elementi.id} id={elementi.id} colore="dark" titolo= {elementi.title} immagine={elementi.cover} />))}
           <Todolist />
           <Newtodolist />
            
        </main>
        </div>
    )
}


export default Main;