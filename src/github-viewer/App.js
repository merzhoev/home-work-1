import React from 'react';
import axios from 'axios';

import SearchForm from './components/SearchForm';
import UserInfo from './components/UserInfo';

import './App.css'

function App() {
  console.log('render');
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  async function getUser(value) {
    try {
      setIsLoading(true);

      const { data } = await axios.get(`https://api.github.com/users/${value}`);
      const { name, login, bio, public_repos, followers, following, location, blog } = data;

      setUser({ name, login, bio, public_repos, followers, following, location, blog, isExist: true });

      setIsLoading(false);
    } catch (err) {
      // if user is not found

      setUser({ isExist: false });
      console.log(err);

      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    const url = new URL(window.location.href);
    const login = url.searchParams.get('login');

    if (login) {
      getUser(login);
    }
  }, []);

  return (
    <div id="app">
      <div className="app-container">
        <SearchForm getUser={getUser} isLoading={isLoading} />
        {user && <UserInfo {...user} />}
      </div>
    </div>
  );
}

export default App;