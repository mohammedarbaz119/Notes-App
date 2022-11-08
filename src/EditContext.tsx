import type { ReactNode } from 'react'
import React,{createContext, useContext, useState} from 'react'
import { Note } from './App'

type cont={
    note:Note,
    setnote:React.Dispatch<React.SetStateAction<Note>>
    id:number,
    setid:React.Dispatch<React.SetStateAction<number>>
}
const EditContext = createContext<any>(undefined)

export default function EditContexter ({children}:{children:ReactNode}) {
    const [note,setnote] = useState<Note>({
        title:'',
        note:''
      })
       const [id,setid] = useState<number>(-1)
  return (
    <EditContext.Provider value={{note,setnote,id,setid}}>
    {children}
    </EditContext.Provider>
  )

}
export function UseEditcontext(){
    const context = useContext(EditContext)
    console.log(context)
    if(!context){
        throw Error("something wrong")
    }
    return context
 }

