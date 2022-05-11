import React from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const fileRef = React.useRef();
  const [isLoading, setIsLoading] = React.useState(false);
  const [formFields, setFormFields] = React.useState({
    name: '',
    email: ''
  });
  const [users, setUsers] = React.useState([]);

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  async function getUsers() {
    try {
      const { data } = await axios('https://627a20424a5ef80e2c14455c.mockapi.io/users');
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function createUser() {
    try {
      const res = await axios.post('https://627a20424a5ef80e2c14455c.mockapi.io/users', formFields);

      if (res.status) {
        alert('Пользователь добавлен');
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function uploadFile() {
    try {
      setIsLoading(true);

      const file = fileRef.current.files[0];

      const formData = new FormData();
      formData.append('file', file);

      const res = await axios.post('http://localhost:9999', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <button onClick={getUsers}>Получить пользователей:</button>
      <br />
      <br />
      <hr />
      <br />
      <h4>Создать пользователя:</h4>
      <br />
      <input onChange={handleChangeInput} value={formFields.email} name="email" type="text" placeholder="Email" />
      <input onChange={handleChangeInput} value={formFields.name} name="name" type="text" placeholder="Name" />
      <button onClick={createUser}>Отправить</button>
      <br />
      <br />
      <hr />
      <br />
      <h4>Загрузка файла:</h4>
      <br />
      <input ref={fileRef} type="file" />
      <button disabled={isLoading} onClick={uploadFile}>Загрузить</button>
      <br />
      <br />
      <ul>
        {users.map(({ id, name, avatar }) => (
          <li key={id}>
            <img width={128} height={128} src={avatar} alt="avatar" />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;