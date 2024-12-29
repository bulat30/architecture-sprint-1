import React, {lazy} from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ProtectedRoute from './components/ProtectedRoute.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import ImagePopup from './components/ImagePopup.js'
import InfoTooltip from './components/InfoTooltip.js'
import PopupWithForm from './components/PopupWithForm.js'

import "./index.css";

const LoginControl = lazy(() => import('authentication/LoginControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
}));

const RegisterControl = lazy(() => import('authentication/RegisterControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
}));

const AddPlacePopupControl = lazy(() => import('places/AddPlacePopupControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
}));

const EditAvatarPopupControl = lazy(() => import('profile/EditAvatarPopupControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
}));

const EditProfilePopupControl = lazy(() => import('profile/EditProfilePopupControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
}));

const App = () => (
  <BrowserRouter>
    <div className="page__content">
      <Header/>
      <Switch>
        <ProtectedRoute/>
        <Route path="/signup">
          <RegisterControl />
        </Route>
        <Route path="/signin">
          <LoginControl />
        </Route>
      </Switch>
      <Footer />
      <EditProfilePopupControl/>
      <AddPlacePopupControl/>
      <PopupWithForm title="Вы уверены?" name="remove-card" buttonText="Да" />
      <EditAvatarPopupControl/>
      <ImagePopup />
      <InfoTooltip/>
    </div>
  </BrowserRouter>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)