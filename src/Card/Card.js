import "./Card.css";
import imgcaffe from "./caffe.jpg";



function Card ({colore, titolo, etichette, prezzo,immagine}){
     
    return(
        <div>
             <div className={" card " +colore} > 
        <div className="card-body">
            <img src={immagine.src} alt={immagine.alt}/>
            <div>
                <h1>{titolo}</h1>
                <p>{prezzo}</p>
            </div>
        </div>
        <div className="card-footer">
            <div className="etichette">
                {etichette && etichette.map((valore, indice) => <span key={indice}>{valore}</span>)}
                
            </div>
            <button>Aggiungi</button>
        </div>
    </div>
        </div>
    )
}

export default Card;