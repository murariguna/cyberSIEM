// js/theme-loader.js
(function(){
  try {
    const saved = localStorage.getItem('cyber_theme'); // 'dark' or 'light'
    const mode = (saved === 'dark') ? 'dark' : 'light';
    if (mode === 'dark') {
      document.documentElement.classList.add('dark-mode');
      // try to add to body, sidebar, navbar too (early)
      if (document.body) document.body.classList.add('dark-mode');
      const sb = document.getElementById('sidebar');
      if (sb) sb.classList.add('dark-mode');
      const navs = document.getElementsByClassName('navbar');
      for (let i=0;i<navs.length;i++) navs[i].classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      if (document.body) document.body.classList.remove('dark-mode');
      const sb = document.getElementById('sidebar');
      if (sb) sb.classList.remove('dark-mode');
      const navs = document.getElementsByClassName('navbar');
      for (let i=0;i<navs.length;i++) navs[i].classList.remove('dark-mode');
    }
  } catch(e){
    console.warn('Theme loader error', e);
  }
})();
