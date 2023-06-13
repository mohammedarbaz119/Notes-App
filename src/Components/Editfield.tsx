import React, { ChangeEvent, useContext, useState } from "react"
import { Note} from "../../../src/App";
import '../css/Eedit.css'
import {UseEditcontext} from "./EditContext"

interface editprops{
    handleedit:(idx:number,state:Note)=>void,
}





const Editfield:React.FC<editprops> = ({handleedit}) => {
    const {note,setnote,id,setid} = UseEditcontext()
    const [state,setstate]= useState<Note>(note)
      const handlechange= (e:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>)=>{
    const {name,value} = e.target
    setstate(prev=>{
      return {
        ...prev,
        [name]:value,
      }
    })
      }
  return (
    <div className="textfield">
    <label className="title-label">Title:</label>
    <input type="text"  name="title" className="title" value={state.title} onChange={(e)=>handlechange(e)} placeholder="Edit title"/>
    <label className="note-label">Note:</label>
    <textarea placeholder="Edit Note" name="note" value={state.note} onChange={(e)=>handlechange(e)}  rows={10} cols={15} className="detail"></textarea>
  <button className="Edit-add" onClick={()=>{ 
    handleedit(id,state)
    setstate({
      title:'',
      note:''
    })
    }}>Edit Note</button>

    </div>
  )
}
export default Editfield;