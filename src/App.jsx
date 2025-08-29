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
        <div className="container">
          <ul className='list-group'>
            {articolesCagliariCalcio.map((article) => (
              <li className='list-group-item' >{article}</li>
            ))}


          </ul>
        </div>


      </main>

    </>
  )
}

export default App
