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
  // use state per tasto modifica 
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  // ***** F U N Z I N E  A G G I U N G I *******
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
  // ***** F U N Z I N E   E L I M I N A *******

  const deleteArticle = (index) => {
    setArticles(prevArticles => {
      const updated = [...prevArticles];
      updated.splice(index, 1);
      return updated;
    });
  };

  //* F U N Z I O N E M O DI F I C A */
  const startEdit = (index) => {
    setEditingIndex(index);
    setEditingText(articles[index]);
  }

  //* F U N Z I O N E  S A L V A M O DI F I C A */
  const saveEdit = () => {
    const text = editingText.trim();
    // controllo campo vuoto 
    if (!text) {
      alert("Il titolo non può essere vuoto.");
      return;
    }
    setArticles(prev => prev.map((t, i) => (i === editingIndex ? text : t)));
    setEditingIndex(null);
    setEditingText("");

  }
  //* F U N Z I O N E  A N U L L A M O DI F I C A */
  const stopEdit = () => {
    setEditingIndex(null);
    setEditingText("");
  }




  return (
    <>
      <Header />
      <main>

        {/*Lista A R T I C O L I  */}
        <div className="container">
          <ul className='list-group'>
            {articles.map((article, index) => (
              <li
                key={index}
                className='list-group-item' >
                {/*COntrollo se se modifica è stato premuto */}
                {editingIndex === index ? (
                  <input
                    type='text'
                    className='form-control short'
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />)
                  : (
                    <p>{article}</p>)

                }



                <div className="buttons">
                  {/*tasto  M O D I F I C A  */}
                  <button
                    className={`btn ${editingIndex === index ? "d-none" : ""}`}
                    type='button'
                    onClick={() => startEdit(index)}

                  >
                    <img src="./edit-button-svgrepo-com.svg" alt="" />

                  </button>
                  {/*Tasto Salva M O D I F I C H E */}

                  <button
                    className={`btn ${editingIndex === index ? "" : "d-none"} `}
                    type='button'
                    onClick={saveEdit}
                  >
                    <img src="./ok-svgrepo-com.svg" alt="" />

                  </button>
                  <button
                    className={`btn ${editingIndex === index ? "" : "d-none"} `}
                    type='button'
                    onClick={stopEdit}
                  >
                    <img src="./back-square-svgrepo-com (1).svg" alt="" />

                  </button>


                  {/*tasto  E L I M I N A */}
                  <button
                    className={`btn btn-outline-danger btn-sm ${editingIndex === index ? "d-none" : ""}`}
                    type="button"
                    onClick={() => deleteArticle(index)}
                  >
                    <i className="bi bi-trash">X</i>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/*Pulsante A G G I U N G I */}
          < div className="input-group mt-4" >
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
      </main >

    </>
  )
}

export default App
