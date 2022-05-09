import React, { useState } from 'react';

import { Nav, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [isAuth, setIsAuth] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Обо мне', path: '/about' },
  ];

  function handleClickAuth() {
    if (isAuth && confirm('Вы действительно хотите выйти?')) {
      localStorage.removeItem('token');
      navigate('/');
      setIsAuth(false);
    } else {
      navigate('/login');
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [pathname]);

  return (
    <header>
      <h2>
        <Link to="/">React Blog</Link>
      </h2>
      <Nav variant="pills" defaultActiveKey="/">
        {navItems.map(({ name, path }, index) => (
          <Nav.Item key={index}>
            <Nav.Link active={pathname === path} to={path} as={Link}>
              {name}
            </Nav.Link>
          </Nav.Item>
        ))}
        <Button onClick={handleClickAuth} variant={isAuth ? 'danger' : 'dark'}>
          {isAuth ? 'Выйти' : 'Войти'}
        </Button>
      </Nav>
    </header>
  );
}

export default Header;
