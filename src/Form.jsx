import { useState } from "react"

const Form = ({ infoCard , setInfoCard , setFormComplet }) => {

  const [ errorNombre , setErrorNombre ] = useState({ error : false , msj : '' })
  const [ errorNumeroTarjeta , setErrorNumeroarjeta ] = useState({ error : false , msj : '' })
  const [ errorVigencia , setErrorVigencia ] = useState({ error : false , msj : '' })
  const [ errorAnioVigencia , setErrorAnioVigencia ] = useState({ error : false , msj : '' })
  const [ errorCvc , setErrorCvc ] = useState({ error : false , msj : '' })

  const guardarDatosCard = e => {
    setInfoCard({
      ...infoCard,
      [e.target.name] :  e.target.value
    })
  }

  const enviarDatos = e => {
    e.preventDefault() 
    const letras = /[^A-Z a-z]/gm
    const numeros = /\D/

    //VALIDANDO FORMULARIO
    //Validando nombre del propietario
    let validPropietario = validandoPropietario( infoCard.nombrePropietario , letras )

    //Validando # de tarjeta
    let validTarjeta = validandoTarjeta( infoCard.numeroTarjeta , numeros )

    //Validando vigencias
    let validVigencia = validandoVigencia ( infoCard.anioVigencia , numeros)
    let validVigencia2 = validandoVigencia2 ( infoCard.mesVigencia , numeros)

    //Validando Cvc
    let validCvc = validandoCvc( infoCard.cvc , numeros )

    if ( validPropietario && validTarjeta && validVigencia && validVigencia2 &&  validCvc  ) {
      setFormComplet( true )
      }
  }

  const validandoPropietario = (propietario , letras) => {
    if( propietario == '' ) {  
      setErrorNombre({ 'error' : true , 'msj' : "Can't be blank"})
      return false
    } else { 
      if( letras.test(propietario) ) {
        setErrorNombre({ 'error' : true , 'msj' : 'Only letters' })
        return false
      } else {
        setErrorNombre( { 'error' : false , 'msj' : '' })
        return true
      }
    }
  }

  const validandoTarjeta = (numTarjeta , numeros) => {
    const tarjeta = numTarjeta.replace(/ /g, '')
    if( tarjeta.length < 16 || tarjeta.length > 16 ) { 
      setErrorNumeroarjeta({ 'error' : true , 'msj' : "Can't be blank , 16 numbers" })
      return false
    } else { 
      if(numeros.test(tarjeta)) {
        setErrorNumeroarjeta({ 'error' : true , 'msj' : 'Wrong format, numbers only' })
        return false
      } else {
        setErrorNumeroarjeta({ 'error' : false , 'msj' : '' }) 
        return true
      }
    }
  }

  const validandoVigencia = ( anio , numeros) => {
    if( anio == '' ) { 
      setErrorAnioVigencia({ 'error' : true , 'msj' : "Can't be blank year" })
      return false
    } else if( numeros.test( anio) ) { 
      setErrorAnioVigencia({ 'error' : true , 'msj' : "invalid year, only numbers" }) 
      return false
    }  else { 
      setErrorAnioVigencia({ 'error' : false , 'msj' : '' }) 
      return true
    }
  }

  const validandoVigencia2 = (mes , numeros) => {
    if( mes == '' ) { 
      setErrorVigencia({ 'error' : true , 'msj' : "Can't be blank" })
      return false
    } else if( numeros.test( mes) ) { 
      setErrorVigencia({ 'error' : true , 'msj' : "only numbers, 01 - 12" }) 
      return false
    } else if( mes < 1 || mes> 12 ) { 
      setErrorVigencia({ 'error' : true , 'msj' : "Month invalid, 01 - 12" }) 
      return false
    } else {
      setErrorVigencia({ 'error' : false , 'msj' : '' }) 
      return true
    }  
  }

  const validandoCvc = (cvc , numeros) => {
    if ( cvc == '') { 
      setErrorCvc({ 'error' : true , 'msj' : "Can't be blank" }) 
      return false
    } else if ( numeros.test( cvc ) ) { 
      setErrorCvc({ 'error' : true , 'msj' : 'Only numbers' }) 
      return false
    } else if ( cvc > 999 ) {
      setErrorCvc({ 'error' : true , 'msj' : 'Invalid CVC, 3 digits' }) 
      return false
    } else {
      setErrorCvc({ 'error' : false , 'msj' : '' })
      return true
    }
  }

  return (
    <>
        <div className='divInputs'>
          <label htmlFor="">card holder name</label>
          <input type="text"  name='nombrePropietario'  className={ errorNombre.error ? 'inputError' : '' } value={ infoCard.nombrePropietario } placeholder='e.g. Jane Appleseed' onChange={ (e) => guardarDatosCard(e) }/>
          { errorNombre.error && <label htmlFor="" className= 'error'  >{ errorNombre.msj}</label> }
        </div>

        <div className='divInputs'>
          <label htmlFor="">card number</label>
          <input type="text"  name="numeroTarjeta" className={ errorNumeroTarjeta.error ? 'inputError' : '' } placeholder='e.g. 1234 5678 9123 0000' value={ infoCard.numeroTarjeta } onChange={ (e) => guardarDatosCard(e)  } maxLength='19' />
          { errorNumeroTarjeta.error && <label htmlFor="" className= 'error'  >{ errorNumeroTarjeta.msj }</label> }
        </div>

        <div className='contentDate divInputs'>
          <div className='content contentDateCadu'>
            <label htmlFor="">exp. date (mm/yy)</label>
            <div className='inputs'>
              <input type="text"  name="mesVigencia"  className={ errorVigencia.error ? 'inputError' : '' } placeholder='MM'  value={ infoCard.mesVigencia } onChange={ (e) => guardarDatosCard(e)  } />
              <input type="text"  name="anioVigencia" className={ errorAnioVigencia.error ? 'inputError' : '' }  placeholder='YY'  value={ infoCard.anioVigencia } onChange={ (e) => guardarDatosCard(e)  } />
            </div>
            { errorVigencia.error && <label htmlFor="" className= 'error'  >{ errorVigencia.msj }</label> }
            { errorAnioVigencia.error && <label htmlFor="" className= 'error'  >{ errorAnioVigencia.msj }</label> }
          </div>

          <div className='content'>
            <label htmlFor="">cvc</label>
            <input type="text"  name="cvc" className={ errorCvc.error ? 'inputError' : '' } value={ infoCard.cvc } onChange={ (e) => guardarDatosCard(e)  } />
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