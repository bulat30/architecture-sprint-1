import React from 'react';
import api from '../utils/api.js';
import Card from './Card';
import '../index.css';

function Places() {
    const [cards, setCards] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState([]);

    React.useEffect(() => {
        addEventListener("onUserLogin", handleUserLogin);
        return () => removeEventListener("onUserLogin", handleUserLogin)
    }, []);

    React.useEffect(() => {
        addEventListener("onUserUpdated", handleUserLogin);
        return () => removeEventListener("onUserUpdated", handleUserLogin)
    }, []);

    React.useEffect(() => {
      addEventListener("onCardAdded", hadnleCardAdd);
      return () => removeEventListener("onCardAdded", hadnleCardAdd)
  }, []);
    
    const handleUserLogin = event => {
      const currentUser = event.detail;
      api
        .getCardList()
        .then(response => {
          console.log(response.data);
          console.log(currentUser);
          setCurrentUser(currentUser);
          setCards(response.data);
        });
    };

    const hadnleCardAdd = (event) => {
      console.log(cards);
      cards.push(event.detail);
      console.log(cards);
      setCards(cards);
    };

    return (
        <section className="places page__section">
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              card={card}
              currentUser={currentUser}
            />
          ))}
        </ul>
      </section>
    );
}

export default Places;