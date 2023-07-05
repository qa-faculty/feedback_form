document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Получаем значения полей
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Проверяем валидность полей
  if (!name || name.length < 2 || name.length > 30 || !/^[а-яА-Я- ]+$/.test(name)) {
    alert('Некорректное имя. Длина имени от 2 до 30 символов. Допустимы только буквы, пробелы и дефисы.');
    return;
  }

  if (!email || !/@/.test(email)) {
    alert('Некорректный email. Email должен содержать "@" и "."');
    return;
  }

  if (!phone || !/^\d{7,14}$/.test(phone)) {
    alert('Некорректный номер телефона. Номер должен состоять из 10 цифр без пробелов или тире.');
    return;
  }

  if (!message || message.length < 10 || message.length > 500) {
    alert('Некорректное сообщение. Длина сообщения от 10 до 500 символов.');
    return;
  }

  // Если все проверки прошли успешно, скрываем форму и показываем сообщение
  document.getElementById('messageBanner').style.display = 'block';
  this.style.display = 'none';
});
