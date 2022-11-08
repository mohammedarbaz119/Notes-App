import React from 'react'
import  { Note } from './App'
import './note.css'
interface Allnotes{
    allnotes:Note[]
    handledel:(idx:number)=>void;
    handleedit:(idx:number,state:Note)=>void;
}


const Notes:React.FC<Allnotes> = ({allnotes,handledel,handleedit}):JSX.Element|null => {
    console.log(allnotes)
    return(
<div className='Notes'>
    {allnotes.map((l,idx)=>(<div className='Note'>
<h1 className="til">{l.title}</h1>
<div className="note">{l.note}</div>

<div className="buttons">
<button className='delbut' onClick={()=>handledel(idx)}>delete</button>
<button className='editbut' onClick={()=>handleedit(idx,l)} >edit</button>
</div>

</div>))}
</div>     
);
}
export default Notes;