(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS;
  const grid = document.querySelector('#project-grid');
  const dialog = document.querySelector('#project-dialog');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const allButton = document.querySelector('#all-projects');
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const link = (item, className = 'text-link') => `<a class="${className}" href="${escape(item.url)}" target="_blank" rel="noopener noreferrer">${escape(item.label)} <span aria-hidden="true">↗</span></a>`;
  let lastTrigger;
  const featuredCount = projects.filter(project => project.featured).length;
  document.querySelectorAll('[data-featured-count]').forEach(el => { el.textContent = String(featuredCount).padStart(2, '0'); });
  document.querySelectorAll('[data-total-count]').forEach(el => { el.textContent = projects.length; });

  function visual(project) {
    return `<div class="project-visual${project.imageProvided ? ' supplied-cover cover-' + escape(project.id) : ''}"><img src="${escape(project.image)}" alt="Обложка проекта ${escape(project.name)}" width="${project.imageWidth || 1754}" height="${project.imageHeight || 550}" loading="lazy"><span class="project-image-action" aria-hidden="true">↗</span></div>`;
  }
  function render(filter = 'featured') {
    const visible = projects.filter(project => filter === 'all' || (filter === 'featured' ? project.featured : project.category === filter));
    filters.forEach(button => { const active = button.dataset.filter === filter; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
    grid.innerHTML = visible.map(project => `<article class="project-card"><button class="project-open" data-project="${escape(project.id)}" aria-label="Подробнее о проекте ${escape(project.name)}">${visual(project)}<div class="project-info"><div class="project-topline"><h3>${escape(project.name)}</h3><span class="project-type">${escape(project.type)}</span></div><p>${escape(project.description)}</p><span class="project-role">${escape(project.role)}</span><span class="project-details-link">Задача, решение и результат <span aria-hidden="true">↗</span></span></div></button></article>`).join('');
    document.querySelector('.project-count').textContent = `Показано ${visible.length} из ${projects.length}`;
    allButton.hidden = filter === 'all';
  }
  filters.forEach(button => button.addEventListener('click', () => render(button.dataset.filter)));
  allButton.addEventListener('click', () => { render('all'); filters.find(button => button.dataset.filter === 'all').focus(); });
  grid.addEventListener('click', event => {
    const trigger = event.target.closest('[data-project]');
    if (!trigger) return;
    const project = projects.find(item => item.id === trigger.dataset.project);
    lastTrigger = trigger;
    document.querySelector('#dialog-content').innerHTML = `
      <div class="dialog-body">
        <div class="dialog-kicker">${escape(project.type)}${project.period ? ' / ' + escape(project.period) : ''}</div>
        <h2 id="dialog-title">${escape(project.name)}</h2>
        <p class="dialog-lead">${escape(project.description)}</p>
        ${project.facts.length ? `<dl class="case-facts">${project.facts.map(fact => `<div><dt>${escape(fact.label)}</dt><dd>${escape(fact.value)}</dd></div>`).join('')}</dl>` : ''}
        <section class="case-section"><h3>Задача бизнеса</h3><p>${escape(project.challenge)}</p></section>
        <section class="case-section"><h3>Как устроено решение</h3><div class="case-solutions">${project.solution.map((item, index) => `<div><span class="solution-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><div><h4>${escape(item.title)}</h4><p>${escape(item.text)}</p></div></div>`).join('')}</div></section>
        <section class="dialog-role"><h3>Моя роль</h3><p>${escape(project.contribution)}</p></section>
        <section class="case-section case-outcome"><h3>Результат</h3><p>${escape(project.outcome)}</p>${project.resultNote ? `<small>${escape(project.resultNote)}</small>` : ''}</section>
        <p class="dialog-source">${project.studio ? 'Проект реализован совместно с командой IT Production.' : 'Личный опыт разработки и развития Drimly.'} ${project.imageProvided ? 'Обложка предоставлена автором портфолио.' : 'Обложка — из опубликованного кейса студии.'}</p>
        <div class="dialog-links">${link({url:project.source,label:project.sourceLabel},'button button-dark')}${project.links.map(item => link(item)).join('')}</div>
      </div>`;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
  });
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { const bounds = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close(); });
  dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); lastTrigger?.focus({preventScroll:true}); });
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
  menu.addEventListener('click', () => { const expanded = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(expanded)); navigation.classList.toggle('open', expanded); });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
  document.querySelector('#copy-email').addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try { await navigator.clipboard.writeText('danilkoding@gmail.com'); status.textContent = 'Адрес скопирован'; }
    catch { status.textContent = 'Выделите адрес выше и скопируйте вручную'; }
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
  render();
})();
