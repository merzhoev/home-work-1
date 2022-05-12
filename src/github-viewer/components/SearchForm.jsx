import React from 'react';
import { debounce } from 'debounce';

function SearchForm({ getUser, isLoading }) {
  const loginRef = React.useRef();
  const [searchFields, setSearchFields] = React.useState({
    login: '',
  });

  const debounceChange = React.useCallback(
    debounce(() => {
      const currentValue = loginRef.current.value;

      history.pushState({}, '', `http://localhost:3000/?login=${currentValue}`);
      getUser(currentValue);
    }, 500),
    [],
  );

  function onChangeInput(e) {
    const { name, value } = e.target;
    setSearchFields({ ...searchFields, [name]: value });

    debounceChange();
  }

  function onSubmitForm(e) {
    e.preventDefault();

    history.pushState({}, '', `http://localhost:3000/?login=${searchFields.login}`);
    getUser(searchFields.login);

    setSearchFields({ login: '' });
  }

  return (
    <form onSubmit={onSubmitForm} className="app-form">
      <input
        ref={loginRef}
        onChange={onChangeInput}
        value={searchFields.login}
        type="text"
        name="login"
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
      />
      <button
        disabled={isLoading}
        className={`app-form_btn ${isLoading ? 'app-form_btn--disabled' : ''}`}>
        {isLoading ? 'Загрузка...' : 'Найти'}
      </button>
    </form>
  );
}

export default SearchForm;
