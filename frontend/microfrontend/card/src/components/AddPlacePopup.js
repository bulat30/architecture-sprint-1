import React from 'react';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api.js';

function AddPlacePopup() {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  const [popupState, changeState] = React.useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link
    });
  }

  function onAddPlace({name, link})
  {
    dispatchEvent(new CustomEvent("onCardAdd"), {
      detail: api.addCard({name, link})
    });
  }

  function onClose() {
    changeState(false);
  }

  return (
    <PopupWithForm
      isOpen={popupState} onSubmit={handleSubmit} onClose={onClose} title="Новое место" name="new-card"
    >
      <label className="popup__label">
        <input type="text" name="name" id="place-name"
               className="popup__input popup__input_type_card-name" placeholder="Название"
               required minLength="1" maxLength="30" value={name} onChange={handleNameChange} />
        <span className="popup__error" id="place-name-error"></span>
      </label>
      <label className="popup__label">
        <input type="url" name="link" id="place-link"
               className="popup__input popup__input_type_url" placeholder="Ссылка на картинку"
               required value={link} onChange={handleLinkChange} />
        <span className="popup__error" id="place-link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;