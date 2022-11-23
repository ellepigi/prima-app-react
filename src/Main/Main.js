import Card from '../Card/Card';
import daticard from '../Card/dati.json'

function Main (){
    
    let titolo="ciao"
    let array= [1, 2, 3, 4]
    return (
         
        <div>
        <main >
            {array}
            {daticard.cards.map ((elementi) => (<Card prezzo={elementi.price} etichette={elementi.etichette} key={elementi.id} id={elementi.id} colore="dark" titolo= {elementi.title} immagine={elementi.cover} />))}
            
        </main>
        </div>
    )
}


export default Main;