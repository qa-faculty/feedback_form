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

  // Валидация поля "Имя"
  if (nameValue === '') {
    alert('Пожалуйста, введите ваше имя.');
    nameInput.focus();
    return;
  }
  if (nameValue !== '' && !/^[a-zA-Zа-яА-Я\s-]{2,30}$/.test(nameValue)) {
    alert('Пожалуйста, введите корректное имя. Допустимы только буквы, пробелы и дефисы.');
    nameInput.focus();
    return;
  }

  // Валидация поля "Email"
  if (emailValue === '') {
    alert('Пожалуйста, введите ваш email.');
    emailInput.focus();
    return;
  }
  if (emailValue !== '' && !/\S+@\S+\.\S+/.test(emailValue)) {
    alert('Пожалуйста, введите корректный email.');
    emailInput.focus();
    return;
  }

  // Валидация поля "Телефон"
  if (phoneValue === '') {
    alert('Пожалуйста, введите ваш номер телефона.');
    phoneInput.focus();
    return;
  }
  if (phoneValue !== '' && !/^\d+$/.test(phoneValue)) {
    alert('Пожалуйста, введите корректный номер телефона. Допустимы только цифры.');
    phoneInput.focus();
    return;
  }

  // Валидация поля "Сообщение"
  if (messageValue === '') {
    alert('Пожалуйста, введите сообщение.');
    messageInput.focus();
    return;
  }
  if (messageValue.length < 10 || messageValue.length > 500) {
    alert('Длина сообщения должна быть от 10 до 500 символов.');
    messageInput.focus();
    return;
  }

  // Все поля прошли валидацию, можно отправлять форму
  // В данном коде отправка формы не реализована, нужно добавить соответствующий код для отправки данных на сервер или обработки формы.
});
