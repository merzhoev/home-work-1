import React from "react";
import getNormalizedDate from "../usefully/normalizedDate";

class Profile extends React.Component {
  render() {
    const { name, registredAt } = this.props;

    const firstName = name.split(" ")[0];
    const normalizedDate = getNormalizedDate(registredAt);

    return (
      <div className="profile__item">
        <h1 className="profile__greeting">
          Привет, <b>{firstName}!</b>
        </h1>
        <h2 className="profile__reg-date">
          Дата регистрации: {normalizedDate}
        </h2>
      </div>
    );
  }
}

export default Profile;
