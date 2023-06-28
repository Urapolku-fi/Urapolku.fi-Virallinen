import React from 'react';
import './App.css';
function App() {
  const submit = () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const listId = process.env.REACT_APP_API_KEY2;
      const dataCenter = apiKey.split('-')[1];
      const email = document.getElementById('emailInput').value;
      const data = {
        email_address: email,
        status: 'subscribed'
      };
    
      const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members/`;
    
      const options = {
        method: 'POST',
        headers: {
          'Authorization': `apikey ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
    
      fetch(url, options)
        .then(response => {
          if (response.ok) {
            alert('Successfully subscribed!');
          } else {
            throw new Error('Error subscribing to the list');
          }
        })
        .catch(error => {
          console.error(error);
        });
        clearInput();
    }
    function clearInput() {
      document.getElementById('emailInput').value = "";
    }

  return (
    <div id="content">
      <div id="background"></div>
      <header><h2>Urapolku</h2></header>
      <section id="coming-text"><h1>Tulossa Pian</h1></section>
      <section id="coming-desc"><p>Uusi tuleva alusta uusien työpaikkojen etsimiseen ja urapolkujen tutkimiseen.</p></section>
      <article id="container">
        <div id="whitebox">
          <div className="timer-container">
            <input type="text" name="" id="emailInput" placeholder="Syötä sähköpostiosoite" />
            <input type="button" value="Lähetä" id="submitBtn" onClick={submit} />
          </div>
        </div>
        <div id="redbox">
          <h3>TILAA UUTISKIRJEEMME</h3>
        </div>
      </article>
    </div>
  );
}

export default App;
