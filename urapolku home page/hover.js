function applyHoverEffect() {
    var registerElement = document.getElementById('register');
    var loginButton = document.getElementById('login');
  
    // Change background color to black and font color to white for the register element
    registerElement.addEventListener('mouseover', function() {
      registerElement.style.backgroundColor = 'black';
      registerElement.style.color = 'white';
    });
  
    // Reset background color to default and font color to black for the register element
    registerElement.addEventListener('mouseout', function() {
      registerElement.style.backgroundColor = '';
      registerElement.style.color = '';
    });
  
    // Change background color to white and font color to black for the login button
    registerElement.addEventListener('mouseover', function() {
      loginButton.style.backgroundColor = 'white';
      loginButton.style.color = 'black';
    });
  
    // Reset background color to default and font color to white for the login button
    registerElement.addEventListener('mouseout', function() {
      loginButton.style.backgroundColor = '';
      loginButton.style.color = '';
    });
  }
  
  // Call the function to apply the hover effect
  applyHoverEffect();