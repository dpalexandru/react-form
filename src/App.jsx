import React from 'react'
import Header from './components/Header'

// DATA 

const articolesCagliariCalcio = [
  "Cagliari Calcio: la nuova stagione tra sogni e obiettivi in Serie A",
  "I giocatori simbolo del Cagliari: da Riva a oggi",
  "Cagliari Calcio e la passione dei tifosi sardi: un amore senza confini",
  "Analisi tattica: come gioca il Cagliari di quest’anno",
  "Le partite storiche del Cagliari Calcio che i tifosi non dimenticheranno"
];

const App = () => {
  return (
    <>
      <Header />
      <main>

        {/*Lista A R T I C O L I  */}
        <div className="container">
          <ul className='list-group'>
            {articolesCagliariCalcio.map((article) => (
              <li className='list-group-item' >{article}</li>
            ))}
          </ul>

          {/*Pulsante A G G I U N G I */}
          <div className="input-group mt-4">
            <input
              type="text"
              className='form-control'
              placeholder='Titolo Articolo' />
            <button
              className='btn btn-primary'
              type='button'>
              Aggiungi
            </button>
          </div>
        </div>



      </main>

    </>
  )
}

export default App
