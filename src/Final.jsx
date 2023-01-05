import imgThank from './assets/icon-complete.svg'

const Final = ({ setFormComplet , setInfoCard }) => {

    const seguir = () => {
        setFormComplet( false )
        setInfoCard( {
          numeroTarjeta : '',
          nombrePropietario : '',
          mesVigencia : '',
          anioVigencia : '',
          cvc : ''
        } )
    }
  return (
    <div className='final'>
        <img src={ imgThank } alt="Imagen agradecimiento" />
        <h2>thank you!</h2>
        <label htmlFor="">We've added your card details</label>
        <button className='button' onClick={ () =>  seguir() }>Continue</button>
    </div>
  )
}

export default Final