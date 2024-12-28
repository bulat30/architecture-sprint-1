import React from 'react';

function ImagePopup() {
  const [card, setCard] = React.useState(null);

  React.useEffect(() => {
    addEventListener("onCardClick", handleCardClick);
    return () => removeEventListener("onCardClick", handleCardClick)
  }, []);
  
  const handleCardClick = (event) => {
    setCard(event.card);
  };

  function onClose(){
    setCard(null);
  }

  return (
    <div className={`popup popup_type_image ${card ? 'popup_is-opened' : ''}`}>
      <div className="popup__content popup__content_content_image">
        <button type="button" className="popup__close" onClick={onClose}></button>
        <img alt={card ? card.name : ''} src={card ? card.link : ''} className="popup__image" />
        <p className="popup__caption">{card ? card.name : ''}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
