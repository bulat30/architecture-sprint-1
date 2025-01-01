import '../index.css';
import React from 'react';
import api from '../utils/api.js';

api.getUserInfo()
      .then(response => {
        const currentUser = response.data;
        dispatchEvent(new CustomEvent("onUserUpdated", {detail: currentUser}));
    });

function Profile() {
    const [name, setName] = React.useState('');
    const [about, setAbout] = React.useState('');
    const [avatar, setAvatar] = React.useState({ backgroundImage: '' });

    React.useEffect(() => {
        addEventListener("onUserLogin", handleUserUpdate);
        return () => removeEventListener("onUserLogin", handleUserUpdate)
    }, []);

    React.useEffect(() => {
        addEventListener("onUserUpdated", handleUserUpdate);
        return () => removeEventListener("onUserUpdated", handleUserUpdate)
    }, []);
    
    const handleUserUpdate = event => {
        const currentUser = event.detail;
        onUserUpdate(currentUser.name, currentUser.about, currentUser.avatar);
    }

    function onUserUpdate(name, about, avatar){
        setName(name);
        setAbout(about);
        setAvatar({ backgroundImage: `url(${avatar})` });
    }

    function onEditAvatar() {
        dispatchEvent(new CustomEvent("onAvatarEdit"));
    }

    function onEditProfile() {
        dispatchEvent(new CustomEvent("onUserUpdate"));
    }

    function onAddPlace() {
        dispatchEvent(new CustomEvent("onCardAdd"));
    }

    return (
        <section className="profile page__section">
        <div className="profile__image" onClick={onEditAvatar} style={avatar}></div>
        <div className="profile__info">
          <h1 className="profile__title">{name}</h1>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          <p className="profile__description">{about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
    );
}

export default Profile;