
 import { useState } from 'react';
import './App.css'
import EditPage from './components/edit/EditPage';
import Header from './components/header/Header'

function App() {

  const [isEdit, setEdit] = useState(false);


  return (
    <>
    <div className="App" >
      {!isEdit ? (<Header setEdit={setEdit}/>) : (<EditPage setEdit={setEdit}/>)}
    </div>
      
    </>
  )
}

export default App
