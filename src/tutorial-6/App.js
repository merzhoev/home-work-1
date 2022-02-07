import React from 'react';
import getDate from './usefully/normalizedDate';

import Reviews from './components/Reviews';
import Feedback from './components/Feedback';

import './App.css';

function App() {
  const [comments, setComments] = React.useState([]);
  const [formControl, setFormControl] = React.useState({
    name: '',
    email: '',
    text: '',
  });

  const handleInput = (e) => {
    setFormControl({ ...formControl, [e.target.name]: e.target.value });
  };

  const addComment = () => {
    const currentDate = getDate(new Date().toLocaleString());
    setComments([
      ...comments,
      {
        fullName: formControl.name,
        email: formControl.email,
        createdAt: currentDate,
        text: formControl.text,
      },
    ]);

    setFormControl({ name: '', email: '', text: '' });
  };

  React.useEffect(() => {
    const initialComments = JSON.parse(localStorage.getItem('comments')) || [];

    setComments(initialComments);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div className="App">
      <div className="wrapper">
        <Reviews items={comments} />
        <Feedback handleInput={handleInput} addComment={addComment} formControl={formControl} />
      </div>
    </div>
  );
}

export default App;
