import React from 'react';

function App() {
  const [users, setUsers] = React.useState([]);

  async function getUsers() {
    try {
      const res = await fetch('https://627a20424a5ef80e2c14455c.mockapi.io/users');
      const users = await res.json();

      setUsers(users)
    } catch (err) {
      console.log(err);
    }
  }

  console.log(users);

  return (
    <div className="App">
      <ul>
        {users.map(({ id, name, avatar }) => (
          <li key={id}>
            <img width={128} height={128} src={avatar} alt="avatar" />
            <p>{name}</p>
          </li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить пользователей</button>
    </div>
  );
}

export default App;