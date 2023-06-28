document.querySelector('.button input[type="submit"]').addEventListener('click', function(e) {
  e.preventDefault();

  // Получаем значения полей формы
  var nameInput = document.querySelector('input[name="name"]');
  var emailInput = document.querySelector('input[name="email"]');
  var phoneInput = document.querySelector('input[name="phone"]');
  var messageInput = document.querySelector('textarea[name="message"]');

  // Получаем значения полей формы
  var nameValue = nameInput.value.trim();
  var emailValue = emailInput.value.trim();
  var phoneValue = phoneInput.value.trim();
  var messageValue = messageInput.value.trim();

  // Валидация полей формы...

  // Все поля прошли валидацию, можно отправлять форму
  // В данном коде отправка формы не реализована, нужно добавить соответствующий код для отправки данных на сервер или обработки формы.

});

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Этот код показывает блок с сообщением
  var messageBanner = document.getElementById('messageBanner');
  if (messageBanner) {
    messageBanner.style.display = 'block';
  }
  
  // Этот код скрывает форму
  this.style.display = 'none';
});
