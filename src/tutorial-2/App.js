import './App.css';

function App() {
  let email = '';
  let password = '';

  function handleInput(e) {
    if (e.target.name === 'email') {
      email = e.target.value;
    } else if (e.target.name === 'password') {
      password = e.target.value;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert('Заполните поля');
    } else {
      console.log({ email, password });

      e.target.reset();
      email = '';
      password = '';
    }
  }

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <div className="auth__email">
          <input onChange={handleInput} name="email" type="text" />
        </div>
        <div className="auth__password">
          <input onChange={handleInput} name="password" type="password" />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default App;