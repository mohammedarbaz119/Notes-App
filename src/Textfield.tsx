import React, { ChangeEvent, useState } from "react"
import { Note ,props} from "./App"
import './textfield.css'




const Textfield:React.FC<props>=({handleclick}) =>{
  const [state,setstate]= useState<Note>({
    title:'',
   note:''
  })
  
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
    <input type="text"  name="title" className="title" value={state.title} onChange={(e)=>handlechange(e)} placeholder="Enter a title"/>
    <label className="note-label">Note:</label>
    <textarea placeholder="Enter a Note" name="note" value={state.note} onChange={(e)=>handlechange(e)}  rows={10} cols={15} className="detail"></textarea>
  <button className="submit" onClick={()=>{ 
    handleclick(state)
    setstate({
      title:'',
      note:''
    })
    }}>Add Note</button>

    </div>
  )
}
export default Textfield;
