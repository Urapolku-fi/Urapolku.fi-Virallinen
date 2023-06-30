function applyHoverEffect() {
    var registerElement = document.getElementsByClassName('Register');
    var loginButton = document.getElementsByClassName('Login');
  
    registerElement.addEventListener('mouseover', function() {
      registerElement.style.backgroundColor = 'black';
      registerElement.style.color = 'white';
    });
    registerElement.addEventListener('mouseout', function() {
      registerElement.style.backgroundColor = '';
      registerElement.style.color = '';
    });
  
    registerElement.addEventListener('mouseover', function() {
      loginButton.style.backgroundColor = 'white';
      loginButton.style.color = 'black';
    });
  
    registerElement.addEventListener('mouseout', function() {
      loginButton.style.backgroundColor = '';
      loginButton.style.color = '';
    });
  }
  
  applyHoverEffect();