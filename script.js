const toggle = document.querySelector('.view-toggle');
const portfolioView = document.querySelector('.view-portfolio');
const cvView = document.querySelector('.view-cv');

toggle.addEventListener('click', () => {
  const showingCv = toggle.classList.toggle('is-cv');
  toggle.setAttribute('aria-pressed', String(showingCv));
  toggle.setAttribute('aria-label', showingCv ? 'Switch to portfolio view' : 'Switch to CV view');
  portfolioView.hidden = showingCv;
  cvView.hidden = !showingCv;
  portfolioView.classList.toggle('is-visible', !showingCv);
  cvView.classList.toggle('is-visible', showingCv);
});