import './App.css';

function App() {
  let email = '';
  let password = '';

  function universalHandler(e) {
    if (e.target.type === 'text') {
      email = e.target.value;
      console.log('email: ', email);
    } else {
      password = e.target.value;
      console.log('password: ', password);
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
          <input onChange={universalHandler} type="text" />
        </div>
        <div className="auth__password">
          <input onChange={universalHandler} type="password" />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default App;