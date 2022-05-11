import React from 'react';

function UserInfo({
  isExist,
  name,
  login,
  bio,
  public_repos,
  followers,
  following,
  location,
  blog,
}) {
  return (
    <div className="app-user">
      {isExist ? (
        <>
          <div className="app-user_info">
            <div className="app-user_image">
              <img src="./assets/img/avatar.png" alt="" />
            </div>
            <div className="app-user_data">
              <h1 className="app-user_name">
                {name}
                <span>@{login}</span>
              </h1>
              <p className="app-user_about">{bio}</p>
            </div>
          </div>
          <ul className="app-user_stats">
            <li className="app-user_stats-item">
              Репозитории
              <span>{public_repos}</span>
            </li>
            <li className="app-user_stats-item">
              Подписчиков
              <span>{followers}</span>
            </li>
            <li className="app-user_stats-item">
              Подписан
              <span>{following}</span>
            </li>
          </ul>
          <ul className="app-user_location">
            <li className="app-user_location-item">{location}</li>
            <li className="app-user_location-item">
              <a href="http://archakov.im">{blog}</a>
            </li>
          </ul>
        </>
      ) : (
        <h1 style={{ textAlign: 'center' }}>Пользователь не найден</h1>
      )}
    </div>
  );
}

export default UserInfo;
