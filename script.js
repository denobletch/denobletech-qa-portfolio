document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));
const modal=document.getElementById('imageModal');
const modalImage=document.getElementById('modalImage');
const closeModal=()=>{if(modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalImage.src='';}};
document.querySelectorAll('.evidence-shot[data-full]').forEach(card=>card.addEventListener('click',()=>{if(!modal||!modalImage)return;modalImage.src=card.dataset.full;modal.classList.add('open');modal.setAttribute('aria-hidden','false');}));
if(modal){modal.addEventListener('click',e=>{if(e.target===modal||e.target.classList.contains('modal-close'))closeModal();});}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});


// Dark/light theme toggle with saved preference.
(() => {
  const button = document.getElementById('themeToggle');
  if (!button) return;
  const label = button.querySelector('.theme-label');
  const icon = button.querySelector('.theme-icon');
  const applyTheme = (mode) => {
    const light = mode === 'light';
    document.body.classList.toggle('light-mode', light);
    button.setAttribute('aria-pressed', String(light));
    button.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    if (label) label.textContent = light ? 'DARK MODE' : 'LIGHT MODE';
    if (icon) icon.textContent = light ? '☾' : '☼';
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', light ? '#f4f6f8' : '#07080c');
  };
  let saved = 'dark';
  try { saved = localStorage.getItem('denobletech-theme') || 'dark'; } catch (e) {}
  applyTheme(saved);
  button.addEventListener('click', () => {
    const next = document.body.classList.contains('light-mode') ? 'dark' : 'light';
    applyTheme(next);
    try { localStorage.setItem('denobletech-theme', next); } catch (e) {}
  });
})();
