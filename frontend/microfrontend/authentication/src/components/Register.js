import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import {register} from '../utils/auth.js';

function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onRegister({email, password})
  {
    register(email, password)
      .then(response =>
        dispatchEvent(new CustomEvent("onUserRegister", {
          detail: response.data
      })))
      .catch(dispatchEvent(new CustomEvent("onUserRegisterFailed")));
  }

  function handleSubmit(e){
    e.preventDefault();
    const userData = {
      email,
      password
    }
    onRegister(userData);
  }
  return (
    <div className="auth-form">
      <BrowserRouter>
        <form className="auth-form__form" onSubmit={handleSubmit}>
          <div className="auth-form__wrapper">
            <h3 className="auth-form__title">Регистрация</h3>
            <label className="auth-form__input">
              <input type="text" name="email" id="email"
                className="auth-form__textfield" placeholder="Email"
                onChange={e => setEmail(e.target.value)} required  />
            </label>
            <label className="auth-form__input">
              <input type="password" name="password" id="password"
                className="auth-form__textfield" placeholder="Пароль"
                onChange={e => setPassword(e.target.value)} required  />
            </label>
          </div>
          <div className="auth-form__wrapper">
            <button className="auth-form__button" type="submit">Зарегистрироваться</button>
            <p className="auth-form__text">Уже зарегистрированы? 
              <Link className="auth-form__link" to="/signin">Войти</Link>
            </p>
          </div>
        </form>
      </BrowserRouter>
    </div>
  )
}

export default Register;
