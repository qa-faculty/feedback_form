document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Получаем значения полей
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Проверяем валидность полей
  if (!name || name.length < 2 || name.length > 30 || !/^[а-яА-Я- ]+$/.test(name)) {
    alert('Ошибка в поле Имя.');
    return;
  }

  if (!email || !/@/.test(email)) {
    alert('Ошибка в поле Email.');
    return;
  }

  if (!phone || !/^\d{7,14}$/.test(phone)) {
    alert('Ошибка в поле Телефон.');
    return;
  }

  if (!message || message.length < 10 || message.length > 50) {
    alert('Ошибка в поле Сообщение');
    return;
  }

  // Если все проверки прошли успешно, скрываем форму и показываем сообщение
  document.getElementById('messageBanner').style.display = 'block';
  this.style.display = 'none';
});
