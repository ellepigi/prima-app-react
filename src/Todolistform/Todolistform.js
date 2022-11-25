

function Todolistform({submit, handleChange, stringa, stampa}) {
    return (
        <>
          <form action="" onSubmit={submit}>
         <input type="text" onChange={handleChange} value={stringa} />
          <button type="submit" onClick={stampa}>Aggiungi</button>
          </form>
        </>
    )
}


export default Todolistform