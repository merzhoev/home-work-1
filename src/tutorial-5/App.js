import React from 'react';

import Phrase from './components/Phrase';
import EmptyBlock from './components/EmptyBlock';
import { adjectivesArr, nounsArr } from './store/data';
import './App.css';

function App() {
  const [phrases, setPhrases] = React.useState([]);

  const generateRandomPhrase = () => {
    const firstAdj = adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
    const secondAdj = adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
    const noun = nounsArr[Math.floor(Math.random() * nounsArr.length)];

    const finalPhrase = `${firstAdj} ${secondAdj} ${noun}`;
    setPhrases([...phrases, finalPhrase]);
  }

  const removePhrases = () => {
    setPhrases([]);
  }

  return (
    <div className="wrapper">
      {phrases.length
        ? (
          <div className="list">
            {phrases.map(phrase => <Phrase text={phrase} />)}
          </div>
        )
        : <EmptyBlock />}
      <button onClick={generateRandomPhrase} className="btn btn_generate">Сгенерировать</button>
      <button onClick={removePhrases} className="btn btn_clear">Очистить</button>
    </div>
  );
}

export default App;