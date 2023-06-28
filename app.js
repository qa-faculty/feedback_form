document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Этот код показывает блок с сообщением
  document.getElementById('messageBanner').style.display = 'block';
  
  // Этот код скрывает форму
  this.style.display = 'none';
});

