import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Main from './Main.js'

function ProtectedRoute({ isLoggedIn }) {
  return (
    <Route exact>
      {
        () => isLoggedIn ? <Main></Main> : <Redirect to="./signin" />
      }
    </Route>
)}

export default ProtectedRoute;