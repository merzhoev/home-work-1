import getNormalizedDate from "../usefully/normalizedDate";

const Profile = ({ name, registredAt }) => {
  const { day, month, year } = getNormalizedDate(registredAt);

  return (
    <div className="profile__item">
      <h1 className="profile__greeting">
        Привет, <b>{name}!</b>
      </h1>
      <h2 className="profile__reg-date">
        Дата регистрации: {`${day} ${month} ${year}`}
      </h2>
    </div>
  );
};

export default Profile;
