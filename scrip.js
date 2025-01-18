document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.querySelector('#srchbx input');
  
    document.getElementById('srch').addEventListener('click', function() {
      inputElement.classList.add('youtube');
      inputElement.classList.remove('srchbx');
  
      setTimeout(function() {
        if (document.activeElement !== inputElement) {
          inputElement.classList.remove('youtube');
          inputElement.classList.add('srchbx');
        }
      }, 5000); // 3 seconds
    });
  
    inputElement.addEventListener('focus', function() {
      inputElement.classList.add('youtube');
      inputElement.classList.remove('srchbx');
    });
  
    inputElement.addEventListener('blur', function() {
      setTimeout(function() {
        if (document.activeElement !== inputElement) {
          inputElement.classList.remove('youtube');
          inputElement.classList.add('srchbx');
        }
      }, 2000); // 3 seconds
    });
  
    // Line animation
    const infoIcons = document.querySelectorAll('.product-Price .fa-circle-info');
    
    infoIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        const productPrice = this.closest('.product-Price');
        const line = productPrice.nextElementSibling;
        const otherDescription = productPrice.parentElement.querySelector('.other-description');
        const otherDescriptiontwo = productPrice.parentElement.querySelector('.other-description-two');
        if (line && line.classList.contains('line')) {
          line.classList.toggle('show');
        }
        if (otherDescription) {
          setTimeout(function() {
            otherDescription.classList.toggle('show');
          }, 500); // 1 seconds delay
        }
        if (otherDescriptiontwo) {
          setTimeout(function() {
            otherDescriptiontwo.classList.toggle('show');
          }, 500); // 1 seconds delay
        }
      });
    });
    // logo to home page 
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function() {
      window.location.href = '../mihir/Mera-Ladi-meri-ghodi-....--main/newh.html';
      });
  });