import React from 'react';
import { Route, Link } from 'react-router-dom';
import logoPath from '../images/logo.svg';

function Header () {
  const [email, setEmail] = React.useState('');

  function handleSignOut() {
    dispatchEvent(new CustomEvent("onUserSignOut"));
  }

  React.useEffect(() => {
    addEventListener("onUserLogn", handleUserLogn);
    return () => removeEventListener("onUserLogn", handleUserLogn)
  }, []);

  const handleUserLogn = (event) => {
    setEmail(event.detail.email)
  };

  return (
    <header className="header page__section">
      <img src={logoPath} alt="Логотип проекта Mesto" className="logo header__logo" />
      <Route exact path="/">
        <div className="header__wrapper">
          <p className="header__user">{ email }</p>
          <button className="header__logout" onClick={handleSignOut}>Выйти</button>
        </div>
      </Route>
      <Route path="/signup">
        <Link className="header__auth-link" to="signin">Войти</Link>
      </Route>
      <Route path="/signin">
        <Link className="header__auth-link" to="signup">Регистрация</Link>
      </Route>
    </header>
  )
}

export default Header;
