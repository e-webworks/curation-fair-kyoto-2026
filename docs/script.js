const header = document.getElementById('site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 36);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'メニューを開く');
  mobileNav.hidden = true;
  header.classList.remove('menu-open');
}
menuToggle.addEventListener('click', () => {
  const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'メニューを閉じる' : 'メニューを開く');
  mobileNav.hidden = !opening;
  header.classList.toggle('menu-open', opening);
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 900 && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu(); });
