import { useState , useEffect } from 'react'
import './App.css'
import Final from './Final'
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
  const [ formComplet , setFormComplet] = useState(false)
  
  return (
    <div className="App">
      <Header
        infoCard = { infoCard }
      />

      <main>
        { formComplet ?
          <Final
            setInfoCard = { setInfoCard }
            setFormComplet = { setFormComplet }
          />
        :
          <Form
            infoCard = { infoCard }
            setInfoCard = { setInfoCard }
            setFormComplet = { setFormComplet }
          />
        }
      </main>
    </div>
  )
}

export default App
