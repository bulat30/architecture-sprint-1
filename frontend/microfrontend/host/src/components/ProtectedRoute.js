import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Main from './Main.js'

const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    addEventListener("onUserLogin", handleUserLogin);
    return () => removeEventListener("onUserLogin", handleUserLogin)
  }, []);

  React.useEffect(() => {
    addEventListener("onUserSignOut", handleUserSignOut);
    return () => removeEventListener("onUserSignOut", handleUserSignOut)
  }, []);

  const handleUserLogin = () => {
    setIsLoggedIn(true)
  };

  const handleUserSignOut = () => {
    setIsLoggedIn(false)
  };

  return (
    <Route exact>
      {
        () => isLoggedIn ? <Main></Main> : <Redirect to="./signin" />
      }
    </Route>
)}

export default ProtectedRoute;