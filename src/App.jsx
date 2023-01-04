import { useState , useEffect } from 'react'
import './App.css'
import Form from './Form'
import Header from './Header'

function App() {

  const [ infoCard , setInfoCard ] = useState({
    numeroTarjeta : '',
    nombrePropietario : '',
    mesVigencia : '',
    anioVigencia : '',
    cvc : ''
  })
  
  return (
    <div className="App">
      <Header
        infoCard = { infoCard }
      />

      <main>
        <Form
          infoCard = { infoCard }
          setInfoCard = { setInfoCard }
        />
      </main>
    </div>
  )
}

export default App
