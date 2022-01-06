import React from "react";
import getNormalizedDate from "../usefully/normalizedDate";

class Profile extends React.Component {
  render() {
    const { name, registredAt } = this.props;
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
  }
}

export default Profile;
