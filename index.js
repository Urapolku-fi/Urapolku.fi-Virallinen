function submit() {
  const apiKey = '5a6e876c6cd3a321e0cd36ec07158569-us21';
  const listId = 'dd94858385';
  const dataCenter = apiKey.split('-')[1];
  const email = document.getElementById('emailInput').value;;

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
        // You can add any additional logic or UI updates here
      } else {
        throw new Error('Error subscribing to the list');
      }
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while subscribing');
      // You can handle errors and display appropriate messages here
    });
}
