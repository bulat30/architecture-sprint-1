import React from 'react';
import api from '../utils/api.js';
import Card from './Card';

function Places() {
    const [cards, setCards] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState([]);

      React.useEffect(() => {
        addEventListener("onUserLogin", handleUserLogin);
        return () => removeEventListener("onUserLogin", handleUserLogin)
      }, []);
    
    const handleUserLogin = event => {
        const currentUser = event.detail;
        const cards = api.getCardList();
        setCurrentUser(currentUser);
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