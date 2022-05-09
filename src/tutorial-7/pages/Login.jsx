import React from 'react';

import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [fields, setFields] = React.useState({
    email: '',
    password: '',
  });

  function handleInputChange(e) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }

  async function submitForm(e) {
    try {
      e.preventDefault();

      const response = await fetch(
        `https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`,
      );

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);

        setFields({
          email: '',
          password: '',
        });

        navigate('/profile');
      } else {
        alert('Неверный логин или пароль');
      }
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/profile');
    }
  }, []);

  return (
    <Form onSubmit={submitForm} className="login-form" autoComplete="off">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control value={fields.email} onChange={handleInputChange} type="email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          value={fields.password}
          onChange={handleInputChange}
          type="password"
          name="password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
}

export default Login;
