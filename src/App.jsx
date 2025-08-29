import React from 'react'
import Header from './components/Header'
import { useState } from 'react';

// DATA 

const articlesCagliariCalcio = [
  "Cagliari Calcio: la nuova stagione tra sogni e obiettivi in Serie A",
  "I giocatori simbolo del Cagliari: da Riva a oggi",
  "Cagliari Calcio e la passione dei tifosi sardi: un amore senza confini",
  "Analisi tattica: come gioca il Cagliari di quest’anno",
  "Le partite storiche del Cagliari Calcio che i tifosi non dimenticheranno"
];

const App = () => {

  const [articles, setArticles] = useState(articlesCagliariCalcio);
  const [titolo, setTitolo] = useState("");

  // ***** F U N Z I N E A L C L I C K S U L B U T T O N *********
  const handleAdd = () => {
    const newTitle = titolo.trim();

    //controlliamo se si sta aggiungendo un tutolo vuoto 
    if (!newTitle) {
      alert("Inserisci un titolo prima di aggiungere!");
      return;
    }
    setArticles(oldArray => [...oldArray, newTitle]);
    //azzerriamo titolo togliendo input dopo aver premito aggiungi
    setTitolo("");
  }

  return (
    <>
      <Header />
      <main>

        {/*Lista A R T I C O L I  */}
        <div className="container">
          <ul className='list-group'>
            {articles.map((article, i) => (
              <li
                key={i}
                className='list-group-item' >
                <p>{article}</p>
                <button className="btn btn-outline-danger btn-sm" type="button">
                  <i className="bi bi-trash">X</i>
                </button>
              </li>
            ))}
          </ul>

          {/*Pulsante A G G I U N G I */}
          <div className="input-group mt-4">
            <input
              type="text"
              className='form-control'
              placeholder='Titolo Articolo'
              value={titolo}
              onChange={(e) => setTitolo(e.target.value)}
            />
            <button
              className='btn btn-primary'
              type='button'
              onClick={handleAdd}
            >
              Aggiungi
            </button>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
