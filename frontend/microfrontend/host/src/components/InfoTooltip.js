import React from 'react';
import SuccessIcon from '../images/success-icon.svg';
import ErrorIcon from '../images/error-icon.svg';

function InfoTooltip() {
  const [icon, setIcon] = React.useState('');
  const [text, setText] = React.useState('');
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    addEventListener("onUserRegister", handleUserRegister);
    return () => removeEventListener("onUserRegister", handleUserRegister)
  }, []);
  
  const handleUserRegister = (event) => {
    setState(true);

    if(event.status === 'success'){
      setIcon(SuccessIcon);
      setText("Вы успешно зарегистрировались");
    }
    else{
      setIcon(ErrorIcon);
      setText( "Что-то пошло не так! Попробуйте ещё раз.");
    }
  };

  return (
    <div className={`popup ${state && 'popup_is-opened'}`}>
      <div className="popup__content">
        <form className="popup__form" noValidate>
          <button type="button" className="popup__close" onClick={onClose}></button>
            <div>
              <img className="popup__icon" src={icon} alt=""/>
              <p className="popup__status-message">{text}</p>
            </div>
        </form>
      </div>
    </div>
  );
}

export default InfoTooltip;

 