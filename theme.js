(() => {
  const STORAGE_KEY = 'aravena-theme';

  const getTheme = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (_) {}

    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (_) {}

    document.querySelectorAll('.theme-toggle').forEach((button) => {
      const isDark = theme === 'dark';
      button.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      button.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
      button.title = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
      button.innerHTML = isDark
        ? '<span class="theme-icon" aria-hidden="true">☀</span><span class="theme-label">Claro</span>'
        : '<span class="theme-icon" aria-hidden="true">☾</span><span class="theme-label">Oscuro</span>';
    });
  };

  const initTheme = () => {
    setTheme(getTheme());

    document.querySelectorAll('.theme-toggle').forEach((button) => {
      button.addEventListener('click', () => {
        const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme, { once: true });
  } else {
    initTheme();
  }
})();