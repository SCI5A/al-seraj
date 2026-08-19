(function () {
  'use strict';

  var THEME_KEY = 'alseraj-theme';
  var LANGUAGE_KEY = 'alseraj-language';
  var DEFAULT_LANGUAGE = 'ar';
  var supportedLanguages = ['ar', 'en'];

  function readStorage(key) {
    try { return window.localStorage.getItem(key); } catch (error) { return null; }
  }

  function writeStorage(key, value) {
    try { window.localStorage.setItem(key, value); } catch (error) { /* graceful degradation */ }
  }

  function pageLanguage() {
    return document.documentElement.lang === 'en' ? 'en' : 'ar';
  }

  function browserLanguage() {
    var candidates = [];
    if (Array.isArray(navigator.languages)) candidates = navigator.languages.slice();
    if (navigator.language) candidates.push(navigator.language);
    for (var i = 0; i < candidates.length; i += 1) {
      var code = String(candidates[i] || '').toLowerCase();
      if (code.indexOf('ar') === 0) return 'ar';
      if (code.indexOf('en') === 0) return 'en';
    }
    return null;
  }

  function currentTheme() {
    var saved = readStorage(THEME_KEY);
    return saved === 'light' || saved === 'dark' || saved === 'system' ? saved : 'system';
  }

  function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    var resolved = theme === 'system' ? systemTheme() : theme;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themePreference = theme;
    document.documentElement.style.colorScheme = resolved;
  }

  // Apply the theme before body paint to reduce a visible flash.
  applyTheme(currentTheme());

  function correspondingLanguagePath(target) {
    var path = window.location.pathname;
    var marker = '/al-seraj/';
    var relative = path.indexOf(marker) >= 0 ? path.split(marker)[1] : '';
    var isEnglish = relative.indexOf('en/') === 0;
    var file = isEnglish ? relative.slice(3) : relative;
    if (!file) file = 'index.html';
    if (file === 'index.html' && !isEnglish && path.endsWith('/')) return marker + 'en/index.html';
    return marker + (target === 'en' ? 'en/' : '') + file;
  }

  function maybeDetectLanguage() {
    var saved = readStorage(LANGUAGE_KEY);
    if (saved === 'ar' || saved === 'en') {
      if (saved !== pageLanguage()) {
        var savedPath = correspondingLanguagePath(saved);
        if (savedPath !== window.location.pathname) window.location.replace(savedPath);
      }
      return;
    }
    var detected = browserLanguage();
    if (!detected || detected === pageLanguage()) return;
    if (detected !== pageLanguage()) {
      var detectedPath = correspondingLanguagePath(detected);
      if (detectedPath !== window.location.pathname) window.location.replace(detectedPath);
    }
  }

  // Detection happens only before a saved preference exists, so manual choice wins.
  maybeDetectLanguage();

  function labelForTheme(theme, language) {
    var labels = language === 'en' ? { light: 'Light', dark: 'Dark', system: 'System' } : { light: 'الوضع الفاتح', dark: 'الوضع الداكن', system: 'النظام' };
    return labels[theme];
  }

  function updateThemeControl(button, theme) {
    var language = pageLanguage();
    button.textContent = labelForTheme(theme, language);
    button.setAttribute('aria-label', language === 'en' ? 'Theme: ' + labelForTheme(theme, language) : 'المظهر: ' + labelForTheme(theme, language));
    button.setAttribute('aria-pressed', theme !== 'system' ? 'true' : 'false');
    button.dataset.themePreference = theme;
  }

  function mountThemeControl() {
    var nav = document.querySelector('nav');
    if (!nav || document.querySelector('[data-theme-control]')) return;
    var language = pageLanguage();
    var button = document.createElement('button');
    button.type = 'button';
    button.className = nav.classList.contains('content-nav') ? 'theme-control content-theme-control' : 'theme-control';
    button.setAttribute('data-theme-control', 'true');
    button.setAttribute('aria-live', 'polite');
    var theme = currentTheme();
    updateThemeControl(button, theme);
    button.addEventListener('click', function () {
      var next = currentTheme() === 'light' ? 'dark' : currentTheme() === 'dark' ? 'system' : 'light';
      writeStorage(THEME_KEY, next);
      applyTheme(next);
      updateThemeControl(button, next);
    });
    var languageLink = Array.prototype.find.call(nav.querySelectorAll('a'), function (a) { return /English|العربية/.test(a.textContent); });
    if (languageLink && languageLink.parentElement && languageLink.parentElement.parentElement === nav.querySelector('ul')) {
      var li = document.createElement('li');
      li.appendChild(button);
      languageLink.parentElement.parentElement.insertBefore(li, languageLink.parentElement);
    } else {
      nav.appendChild(button);
    }
  }

  function mountLanguagePersistence() {
    var nav = document.querySelector('nav');
    if (!nav) return;
    var languageLink = Array.prototype.find.call(nav.querySelectorAll('a'), function (a) { return /English|العربية/.test(a.textContent); });
    if (!languageLink || languageLink.dataset.languageBound) return;
    languageLink.dataset.languageBound = 'true';
    languageLink.addEventListener('click', function () {
      writeStorage(LANGUAGE_KEY, languageLink.textContent.trim() === 'English' ? 'en' : 'ar');
    });
  }

  function bindSystemTheme() {
    var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    if (!media) return;
    var listener = function () { if (currentTheme() === 'system') applyTheme('system'); };
    if (media.addEventListener) media.addEventListener('change', listener);
    else if (media.addListener) media.addListener(listener);
  }

  document.addEventListener('DOMContentLoaded', function () {
    mountThemeControl();
    mountLanguagePersistence();
    bindSystemTheme();
  });
}());
