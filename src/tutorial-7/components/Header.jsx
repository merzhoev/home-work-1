import React from 'react';

import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Обо мне', path: '/about' },
    { name: 'Войти', path: '/login' },
  ];

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
      </Nav>
    </header>
  );
}

export default Header;
