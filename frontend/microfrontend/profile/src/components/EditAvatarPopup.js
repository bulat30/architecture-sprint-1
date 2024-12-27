import React from 'react';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api.js';

function EditAvatarPopup() {
  const inputRef = React.useRef();
  const [popupState, changeState] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  function onUpdateAvatar({avatar}) {
    dispatchEvent(new CustomEvent("onAvatarUpdated"), {
      detail: api.setUserAvatar({avatar})
    });
  }

  function onClose() {
    changeState(false);
  }

  return (
    <PopupWithForm
      isOpen={popupState} onSubmit={handleSubmit} onClose={onClose} title="Обновить аватар" name="edit-avatar"
    >

      <label className="popup__label">
        <input type="url" name="avatar" id="owner-avatar"
               className="popup__input popup__input_type_description" placeholder="Ссылка на изображение"
               required ref={inputRef} />
        <span className="popup__error" id="owner-avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
