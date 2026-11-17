(() => {
  const variant = new URLSearchParams(window.location.search).get('hero');
  const hero = document.querySelector('.hero');
  if (!hero) return;

  if (variant === 'product') {
    hero.classList.add('hero-layout-product');
    hero.querySelector('.eyebrow').textContent = 'САЙТЫ · ПРИЛОЖЕНИЯ · АВТОМАТИЗАЦИЯ';
    hero.querySelector('h1').innerHTML = 'От задачи бизнеса —<br><span>к работающему решению.</span>';
    hero.querySelector('.hero-description').textContent = 'Я Данил — разработчик из Сибири. Помогаю понять, какое IT-решение нужно компании, определить первую версию и довести её до запуска. Беру на себя разработку и остаюсь на связи для дальнейшего развития.';
    hero.querySelector('.hero-note').textContent = 'Обсуждаем задачу → согласуем план → реализуем → развиваем';
    return;
  }
  if (variant !== 'team') return;

  document.body.classList.add('resume-view');
  document.title = 'Данил Рябов — разработчик с опытом руководства командой';
  document.querySelector('meta[name="description"]').content = '5 лет разработки, 17 проектов. Приложения, веб-сервисы и автоматизация. Данил Рябов: личное участие в коде, интеграции и руководство небольшой командой.';
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = document.querySelector('meta[name="description"]').content;
  document.querySelector('.brand').textContent = 'Разработка · Опыт · Команда';
  document.querySelector('#navigation a[href="#about"]').textContent = 'Опыт';
  hero.classList.add('hero-layout-team');
  hero.querySelector('.eyebrow').textContent = 'РАЗРАБОТЧИК · ОПЫТ РУКОВОДСТВА КОМАНДОЙ';
  hero.querySelector('h1').innerHTML = 'Пишу код.<br>Довожу до запуска.<br><span>Усиливаю команду.</span>';
  hero.querySelector('.hero-description').innerHTML = '<strong>Я Данил Рябов, разработчик из Сибири.</strong> За 5 лет реализовал 17 проектов — самостоятельно и с командой. Создаю приложения и веб-сервисы, автоматизирую рабочие процессы. Могу взять задачу от обсуждения с заказчиком до запуска и дальнейшего развития.';
  hero.querySelector('.hero-actions').innerHTML = '<a class="button button-dark" href="#projects">Посмотреть мой опыт <span aria-hidden="true">↘</span></a><a class="text-link" href="assets/danil-ryabov-resume.pdf" target="_blank" rel="noopener">Резюме в PDF <span aria-hidden="true">↗</span></a><a class="text-link" href="#contact">Познакомиться <span aria-hidden="true">↗</span></a>';
  hero.querySelector('.hero-note').textContent = 'Открыт к работе в команде и проектному сотрудничеству. Новокузнецк · UTC+7.';
  hero.querySelector('.profile-top>span').textContent = 'ДАНИЛ РЯБОВ';
  hero.querySelector('.code-note-label').textContent = 'МОЯ РОЛЬ В ПРОЕКТАХ';
  hero.querySelector('.approach-list').innerHTML = '<li>Лично пишу код</li><li>Связываю системы</li><li>Организую разработку</li>';
  hero.querySelector('.code-note-footer').innerHTML = '<i></i> От первой версии до нескольких лет поддержки';

  document.querySelector('.metrics').insertAdjacentHTML('afterend', `
    <section class="resume-evidence wrap" aria-labelledby="evidence-title">
      <div class="resume-evidence-heading"><h2 id="evidence-title">Опыт в конкретных задачах</h2><p>Разработка, автоматизация и ответственность за работающий продукт.</p></div>
      <div class="resume-evidence-grid">
        <article><span class="resume-evidence-label">АВТОМАТИЗАЦИЯ / МЯСОРУБКА</span><h3>От ручного учёта — к рабочему инструменту</h3><p>С командой связали весы, рабочие места сотрудников и «МойСклад». Учёт производства перенесли от директора к исполнителям во всех магазинах сети.</p><a class="text-link" href="#projects">Смотреть проекты <span aria-hidden="true">↘</span></a></article>
        <article><span class="resume-evidence-label">ИНТЕГРАЦИИ / COOPERATOR</span><h3>Личная разработка внутри командного проекта</h3><p>Сам разработал админ-панель с интеграцией «МойСклад». Уточнял процессы с заказчиком, организовывал работу разработчика и тестировщика, проверял код.</p><a class="text-link" href="#projects">Смотреть проекты <span aria-hidden="true">↘</span></a></article>
        <article><span class="resume-evidence-label">РАЗВИТИЕ ПРОДУКТА / DRIMLY</span><h3>Четыре года работы после первого запуска</h3><p>Начал как основной разработчик, затем работал с небольшой командой. Развивал курсы, подписки и офлайн-медиаплеер. За период работы — более 15 000 установок.</p><a class="text-link" href="#projects">Смотреть проекты <span aria-hidden="true">↘</span></a></article>
      </div>
    </section>`);
  document.querySelector('#projects-title').innerHTML = 'Проекты и мой вклад<span class="accent-dot">.</span>';
  document.querySelector('.projects-section .section-heading>p').innerHTML = 'Что было нужно заказчику,<br class="desktop-break"> что реализовали и за что отвечал я.';
  document.querySelector('.project-provenance p').textContent = 'В одних проектах я полностью отвечал за разработку, в других работал вместе с командой IT Production и руководил реализацией. Внутри каждого кейса отдельно описана моя роль.';

  document.querySelector('#expertise-title').innerHTML = 'Что могу взять на себя<br>в вашей команде.';
  document.querySelector('.expertise-section .section-heading>p').innerHTML = 'Личное участие в разработке<br class="desktop-break"> и понимание задачи бизнеса.';
  const skills = [
    ['Разработка и интеграции', 'Взять в работу приложение, веб-сервис или внутренний инструмент. Подключить API, платежи и учётные системы, реализовать интерфейс и логику работы с данными.', ['Приложения', 'Веб-сервисы', 'API']],
    ['Автоматизация процессов', 'Разобраться, как сотрудники выполняют работу, и перевести повторяющиеся операции в программное решение. Есть опыт производственного учёта, работы с оборудованием и обмена данными с «МойСклад».', ['Учёт', 'Интеграции', 'Внутренние сервисы']],
    ['Организация разработки', 'Оценить и разбить задачу на этапы, согласовать требования с заказчиком, организовать работу небольшой команды. В IT Production совмещал это с разработкой, проверкой кода и подготовкой релизов.', ['Планирование', 'Ревью кода', 'Релизы']]
  ];
  document.querySelectorAll('.expertise-card').forEach((card, index) => {
    const [title, description, tags] = skills[index];
    card.querySelector('h3').textContent = title;
    card.querySelector('p').textContent = description;
    card.querySelector('.tags').innerHTML = tags.map(tag => `<span>${tag}</span>`).join('');
  });
  document.querySelector('#about-title').innerHTML = 'От самостоятельной разработки<br>к работе с командой.';
  const about = document.querySelectorAll('.about-intro>p');
  about[0].textContent = 'Начинал с самостоятельной разработки мобильных приложений и прямого общения с заказчиками. Затем в IT Production руководил небольшой командой: оценивал задачи, распределял работу, проверял код и отвечал за выпуск. При этом продолжал сам разрабатывать ключевые части продуктов.';
  about[1].textContent = 'Этот опыт помогает мне видеть связь между кодом и работой компании: обсуждать требования с руководителем, разбираться в процессах сотрудников и доводить изменения до использования. Интересна работа в команде, где можно применить этот опыт, развивать продукты и учиться у коллег.';
  document.querySelector('#contact-title').innerHTML = 'Давайте познакомимся<br><span>и обсудим работу вместе.</span>';
  document.querySelector('.contact-main>p').textContent = 'Готов обсудить роль в вашей команде или участие в конкретном проекте. Расскажу подробнее о своём опыте, покажу решения и познакомлюсь с вашими задачами.';
  document.querySelector('.contact-availability').innerHTML = '<span class="status-dot"></span> Работа в команде · Проектное сотрудничество';
})();
