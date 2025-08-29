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


  const handleAdd = () => {
    const newTitle = titolo.trim();
    setArticles(oldArray => [...oldArray, newTitle]);
    console.log(articles)
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
                {article}
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
