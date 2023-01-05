import imgCardLogo from './assets/card-logo.svg'

const Header = ({ infoCard }) => {

  return (
    <header>
        <div className=" target targetReverse">
          <p>{ infoCard.cvc == '' ? "0 0 0" : infoCard.cvc }</p>
        </div>
        <div className="target targetFront">
            <div className='cardLogo'>
                <img src={ imgCardLogo } alt="Imagen Card Logo" />
            </div>
          <div className="content contentNumberTarget">
            <p>{ infoCard.numeroTarjeta == '' ? '0000 0000 0000 0000' : infoCard.numeroTarjeta}</p>
          </div>
          <div className="content contentName">
            <p>{ infoCard.nombrePropietario == '' ? 'JANE APPLESEED' : infoCard.nombrePropietario }</p>
            <p>{ infoCard.mesVigencia == '' ? '00' : infoCard.mesVigencia }/{ infoCard.anioVigencia == '' ? '00'  : infoCard.anioVigencia}</p>
          </div>
        </div>
      </header>
  )
}

export default Header