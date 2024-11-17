
//Dato un array di oggetti contenente i linguaggi del web e le loro descrizioni:
//Crea una lista di bottoni, uno per linguaggio.
//Inserisci sotto una card che mostri il titolo e la descrizione del primo linguaggio nell’array.
//Fare in modo che, cliccando uno dei bottoni, la card in basso visualizzi il linguaggio corrispondente e la relativa descrizione

import React from 'react';
import { createFunction } from './hooks/createFunction';
import './App.css';

function App() {

  const { selectedCard, selectCard } = createFunction();

  return (
    <><div className="App">

      <div className="buttons-container">
        {data.map((card, index) => (
          <button
            key={index}
            onClick={() => selectCard(card)}

            {...card.name} />))}
      </button>
      ))}
    </div><div className="card">
        <h2>{selectedCard.name}</h2>
        <p>{selectedCard.description}</p>
      </div></>
    </div >
  );
}

export default App;
