function Profile() {

    const [name, setName] = React.useState('');
    const [about, setAbout] = React.useState('');
    const [avatar, setAvatar] = React.useState({ backgroundImage: '' });

    React.useEffect(() => {
        addEventListener("onUserLogin", handleUserLogin);
        return () => removeEventListener("onUserLogin", handleUserLogin)
      }, []);
    
      const handleUserLogin = event => {
        const currentUser = event.detail;
        setName(currentUser.name);
        setAbout(currentUser.about);
        setAvatar({ backgroundImage: `url(${currentUser.avatar})` });
      }

    function onEditAvatar() {
        dispatchEvent(new CustomEvent("onAvatarEdit"), {
            detail: avatar
        });
    }

    function onEditProfile() {
        dispatchEvent(new CustomEvent("onProfileEdit"), {
            detail: avatar
        });
    }

    function onAddPlace() {
        dispatchEvent(new CustomEvent("onPlaceAdd"), {
            detail: avatar
        });
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