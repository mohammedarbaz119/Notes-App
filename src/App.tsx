import React, { useReducer} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Textfield from './Components/Textfield';
import Editfield from './Components/Editfield';
import  { UseEditcontext } from './Components/EditContext';
import './App.css';
import NavBar from './Components/NavBar';
import Notes from './Components/Notes';




export interface props {
  handleclick: (state: Note) => void,

}

export interface Note {
  title: string,
  note: string,
}

type State = Note[]

type Actions = {
  type: "ADD",
  notr: Note
} | { type: "DEL", idx: number } |
{ type: "EDIT", payload: { state: Note, idx: number } };





const App: React.FC = () => {
  const nav = useNavigate()
  const { note, setnote, id, setid } = UseEditcontext()
  function reduce(state: State, actions: Actions): State {
    switch (actions.type) {
      case "ADD": {
        localStorage.setItem("note", JSON.stringify([...state, actions.notr]))
        return [...state, actions.notr]
      }
      case "DEL": {
        localStorage.setItem("note", JSON.stringify(state.filter((_, i) => actions.idx !== i)))
        return state.filter((_, i) => actions.idx !== i)

      }
      case "EDIT": {
        localStorage.setItem("note", JSON.stringify(state.map((l, i) => {
          if (i === actions.payload.idx) {
            return {
              title: actions.payload.state.title,
              note: actions.payload.state.note
            }

          }
          return l
        })))
        return state.map((l, i) => {
          if (i === actions.payload.idx) {
            return {

              title: actions.payload.state.title,
              note: actions.payload.state.note
            }

          }
          return l
        })
      }
      default:
        return state
    }

  }


  const a: string | null = localStorage.getItem("note")
  const b: Note[] | [] = a ? JSON.parse(a) : []
  const [notes, dispatch] = useReducer(reduce, b);
  console.log(notes)



  const handel = (idx: number) => {
    dispatch({ type: "DEL", idx: idx })
  }


  const handeedit = (idx: number, state: Note) => {
    setnote(state)
    setid(idx)
    nav('/edit')
  }
  const Editnote = (idx: number, state: Note) => {
    dispatch({ type: "EDIT", payload: { state: state, idx: idx } })
    nav('/')
  }

  const handleadd = (state: Note): void => {
    if (state.title === '' || state.note === '') {
      alert('complete all the fields')
      return
    }
    dispatch({ type: "ADD", notr: state })
    nav('/')
  }


  return (

    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Notes allnotes={notes} handledel={handel} handleedit={handeedit}/>}/>
        <Route path='/new' element={<Textfield handleclick={handleadd}/>} />
        <Route path='/edit' index element={<Editfield handleedit={Editnote} />} />
      </Routes>
    </div>


  );
}

export default App;
