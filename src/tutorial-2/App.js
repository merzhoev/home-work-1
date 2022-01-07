import './App.css';

function App() {
  let email = '';
  let password = '';

  function handleInput(e) {
    if (e.target.type === 'text') {
      email = e.target.value;
    } else {
      password = e.target.value;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert('Заполните поля');
    } else {
      console.log({ email, password });
      e.target[0].value = e.target[1].value = '';
      email = password = '';
    }
  }

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <div className="auth__email">
          <input onChange={handleInput} type="text" />
        </div>
        <div className="auth__password">
          <input onChange={handleInput} type="password" />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default App;