import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const AuthenticationControl = lazy(() => import('authentication/LoginControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
}));

const RegisterControl = lazy(() => import('authentication/RegisterControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
}));

const PlacesControl = lazy(() => import('places/PlacesControl').catch(() => {
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

const ProfileControl = lazy(() => import('profile/ProfileControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
}));

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)