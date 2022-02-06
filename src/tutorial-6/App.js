import React from 'react';
import getDate from './usefully/normalizedDate';

import Reviews from './components/Reviews';
import Feedback from './components/Feedback';

import './App.css';

function App() {
  const [comments, setComments] = React.useState([]);
  const [formControl, setFormControl] = React.useState({
    nameInput: '',
    emailInput: '',
    textInput: '',
  });

  const handleInput = (e) => {
    setFormControl({ ...formControl, [`${e.target.name}Input`]: e.target.value });
  };

  const addComment = () => {
    const currentDate = getDate(new Date().toLocaleString());
    setComments([
      ...comments,
      {
        fullName: formControl.nameInput,
        email: formControl.emailInput,
        createdAt: currentDate,
        text: formControl.textInput,
      },
    ]);

    setFormControl({ nameInput: '', emailInput: '', textInput: '' });
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
