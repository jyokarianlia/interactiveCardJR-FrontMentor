import { useState } from "react"

const Form = ({ infoCard , setInfoCard }) => {

  const [ errorNombre , setErrorNombre ] = useState({ error : false , msj : '' })
  const [ errorNumeroTarjeta , setErrorNumeroarjeta ] = useState({ error : false , msj : '' })
  const [ errorVigencia , setErrorVigencia ] = useState({ error : false , msj : '' })
  const [ errorCvc , setErrorCvc ] = useState({ error : false , msj : '' })

  const guardarDatosCard = e => {
    setInfoCard({
      ...infoCard,
      [e.target.name] :  e.target.value
    })
  }

  const enviarDatos = e => {
    e.preventDefault() 
    const letras = /^[a-zA-ZÀ-ÿ\s]+$/
    const numeros = /\D/

    //VALIDANDO FORMULARIO
    //Validando nombre del propietario
    console.log()
    if( infoCard.nombrePropietario == '' ) {  
      setErrorNombre({ 'error' : true , 'msj' : "Can't be blank"})
    } else { 
      if( letras.test(infoCard.nombrePropietario) ) {
        setErrorNombre({ 'error' : true , 'msj' : 'Only letters' })
      } else {
        setErrorNombre( { 'error' : false , 'msj' : '' })
      }
    }
    //Validando # de tarjeta
    const tarjeta = infoCard.numeroTarjeta.replace(/ /g, '')
    if( tarjeta.length < 16 || tarjeta.length > 16 ) { 
      setErrorNumeroarjeta({ 'error' : true , 'msj' : "Can't be blank , 16 numbers" })
    } else { 
      if(numeros.test(infoCard.numeroTarjeta)) {
        setErrorNumeroarjeta({ 'error' : true , 'msj' : 'Wrong format, numbers only' })
      } else {
        setErrorNumeroarjeta({ 'error' : false , 'msj' : '' }) 
      }
    }

    //Validando vigencias
    if( infoCard.mesVigencia < 1 || mesVigencia > 12 ) { 
      setErrorVigencia({ 'error' : true , 'msj' : "Month invalid, 01 - 12" }) 
    } else { 
      setErrorVigencia({ 'error' : false , 'msj' : '' }) 
    }

    //Validando Cvc
    if ( infoCard.cvc == '') { setErrorCvc({ 'error' : true , 'msj' : "Can't be blank" }) } else { setErrorCvc( false ) }
  }

  return (
    <>
        <div className='divInputs'>
          <label htmlFor="">card holder name</label>
          <input type="text"  name='nombrePropietario'  value={ infoCard.nombrePropietario } placeholder='e.g. Jane Appleseed' onChange={ (e) => guardarDatosCard(e) }/>
          { errorNombre.error && <label htmlFor="" className= 'error'  >{ errorNombre.msj}</label> }
        </div>

        <div className='divInputs'>
          <label htmlFor="">card number</label>
          <input type="text"  name="numeroTarjeta" placeholder='e.g. 1234 5678 9123 0000' value={ infoCard.numeroTarjeta } onChange={ (e) => guardarDatosCard(e)  } maxLength='19' />
          { errorNumeroTarjeta.error && <label htmlFor="" className= 'error'  >{ errorNumeroTarjeta.msj }</label> }
        </div>

        <div className='contentDate divInputs'>
          <div className='content contentDateCadu'>
            <label htmlFor="">exp. date (mm/yy)</label>
            <div className='inputs'>
              <input type="number"  name="mesVigencia"  placeholder='MM'  value={ infoCard.mesVigencia } onChange={ (e) => guardarDatosCard(e)  } />
              <input type="number"  name="anioVigencia"  placeholder='YY'  value={ infoCard.anioVigencia } onChange={ (e) => guardarDatosCard(e)  } />
            </div>
            { errorVigencia.error && <label htmlFor="" className= 'error'  >{ errorVigencia.msj }</label> }
          </div>

          <div className='content'>
            <label htmlFor="">cvc</label>
            <input type="number"  name="cvc" value={ infoCard.cvc } onChange={ (e) => guardarDatosCard(e)  } />
            { errorCvc.error && <label htmlFor="" className= 'error'  >{ errorCvc.msj }</label> }
          </div>
        </div>

        <div className="divInputs">
          <input type='button' value='Confirm' className='button' onClick={ e => enviarDatos(e) } />
        </div>
    </>
  )
}

export default Form