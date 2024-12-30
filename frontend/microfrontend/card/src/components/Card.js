import React from 'react';
import api from '../utils/api.js';
import '../index.css';

function Card({card, currentUser}) {
  const cardStyle = { backgroundImage: `url(${card.link})` };

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onChangeLikeCardStatus(card);
  }

  function handleDeleteClick() {
    onDeleteCard(card);
  }

  function onCardClick(card) {
    dispatchEvent(new CustomEvent("onCardClick", {
      detail: card
    }));
  }

  function onChangeLikeCardStatus(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then(response => 
        dispatchEvent(new CustomEvent("onLikeCardStatusChange", {
          detail: response.data
      })))
      .catch((error) => {
        console.log(error);
        dispatchEvent(new CustomEvent("onLikeCardStatusChangeFailed"));
      }
    );
  }

  function onDeleteCard(card){
    api.removeCard(card._id)
      .then(response =>
        dispatchEvent(new CustomEvent("onCardDelete", {
          detail: response.data
      })))
      .catch(dispatchEvent(new CustomEvent("onCardDeleteFailed")))
  }

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${isLiked && 'card__like-button_is-active'}`;

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );

  return (
    <li className="places__item card">
      <div className="card__image" style={cardStyle} onClick={handleClick}>
      </div>
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      <div className="card__description">
        <h2 className="card__title">
          {card.name}
        </h2>
        <div className="card__likes">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
