(() => {
  const variant = new URLSearchParams(window.location.search).get('hero');
  const hero = document.querySelector('.hero');
  const variants = {
    team: {
      className: 'hero-layout-team',
      eyebrow: 'ЛИЧНАЯ РАЗРАБОТКА · РАБОТА В КОМАНДЕ',
      title: 'Ваша команда.<br>Мой опыт.<br><span>Общий результат.</span>',
      description: 'Я Данил — разработчик из Сибири. Подключаюсь к компаниям, которым нужен человек для развития сайта, приложения или внутреннего сервиса. Сам реализую задачи и помогаю команде двигаться от обсуждений к выпуску.',
      note: 'Разработчик в команде. При необходимости — тимлид.'
    },
    product: {
      className: 'hero-layout-product',
      eyebrow: 'САЙТЫ · ПРИЛОЖЕНИЯ · АВТОМАТИЗАЦИЯ',
      title: 'От задачи бизнеса —<br><span>к работающему решению.</span>',
      description: 'Я Данил — разработчик из Сибири. Помогаю понять, какое IT-решение нужно компании, определить первую версию и довести её до запуска. Беру на себя разработку и остаюсь на связи для дальнейшего развития.',
      note: 'Обсуждаем задачу → согласуем план → реализуем → развиваем'
    }
  };
  if (!hero || !variants[variant]) return;
  const selected = variants[variant];
  hero.classList.add(selected.className);
  hero.querySelector('.eyebrow').textContent = selected.eyebrow;
  hero.querySelector('h1').innerHTML = selected.title;
  hero.querySelector('.hero-description').textContent = selected.description;
  hero.querySelector('.hero-note').textContent = selected.note;
})();
