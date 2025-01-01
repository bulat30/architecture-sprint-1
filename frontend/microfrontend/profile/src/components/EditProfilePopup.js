import React from 'react';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api.js';
import '../index.css';

function EditProfilePopup() {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [popupState, changeState] = React.useState(false);

  React.useEffect(() => {
    addEventListener("onUserUpdate", handleUserUpdate);
    return () => removeEventListener("onUserUpdate", handleUserUpdate)
  }, []);
  
  const handleUserUpdate = () => {
    changeState(true);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    onUpdateUser({
      name,
      about: description,
    });
    onClose();
  }

  function onUpdateUser({name, about}) {
    api.setUserInfo({name, about})
      .then(response => 
        dispatchEvent(new CustomEvent("onUserUpdated"), {
          detail: response.data
      }))
      .catch((error) => {
        console.log(error);
        dispatchEvent(new CustomEvent("onUserUpdateFailed"));
      });
  }

  function onClose() {
    changeState(false);
  }

  return (
    <PopupWithForm
      isOpen={popupState} onSubmit={handleSubmit} onClose={onClose} title="Редактировать профиль" name="edit"
    >
      <label className="popup__label">
        <input type="text" name="userName" id="owner-name"
               className="popup__input popup__input_type_name" placeholder="Имя"
               required minLength="2" maxLength="40" pattern="[a-zA-Zа-яА-Я -]{1,}"
               value={name || ''} onChange={handleNameChange} />
        <span className="popup__error" id="owner-name-error"></span>
      </label>
      <label className="popup__label">
        <input type="text" name="userDescription" id="owner-description"
               className="popup__input popup__input_type_description" placeholder="Занятие"
               required minLength="2" maxLength="200"
               value={description || ''} onChange={handleDescriptionChange} />
        <span className="popup__error" id="owner-description-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
