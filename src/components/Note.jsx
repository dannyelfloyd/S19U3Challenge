export default function Note({id, text, color, deleteNote}){

    return(
        <div style={{backgroundColor:color}}>
            <p>{text}</p>
            <button onClick={() => deleteNote(id)}>Delete</button>
        </div>
    )
}