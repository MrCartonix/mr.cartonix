document.addEventListener("DOMContentLoaded", function() {
    // --- Анимация по буквам для всех "title" (можешь добавить свои классы)
    const titleSelectors = [
        '.hero-title',
        '.partners-title',
        '.livechart-title',
        '.buy-title',
        '.socials-title'
    ];

    function animateTitle(el) {
        const raw = el.textContent || el.innerText;
        el.innerHTML = '';
        raw.split('\n').forEach((part, idx) => {
            if (idx > 0) el.appendChild(document.createElement('br'));
            for (let i = 0; i < part.length; i++) {
                const span = document.createElement('span');
                span.innerText = part[i];
                if (part[i] === " ") span.style.width = "0.4em";
                el.appendChild(span);
            }
        });
        el.classList.remove('animated');
        setTimeout(() => {
            Array.from(el.querySelectorAll('span')).forEach((span, idx) => {
                span.style.opacity = '0';
                setTimeout(() => {
                    span.style.opacity = '1';
                }, 40 * idx);
            });
            el.classList.add('animated');
        }, 30);
    }

    // Запуск анимации по буквам через IntersectionObserver
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateTitle(entry.target);
            }
        });
    }, { threshold: 0.5 });

    titleSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            animateTitle(el);
            titleObserver.observe(el);
        });
    });

    // --- Fade/slide появления для контента и сабтайтлов
    const fadeSelectors = [
        '.hero-subtitle', '.hero-content',
        '.partners-content',
        '.livechart-content',
        '.buy-content',
        '.socials-content'
        // Добавь любые другие нужные классы сюда!
    ];

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.35 });

    fadeSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            fadeObserver.observe(el);
        });
    });
});

function enableParallax() {
  // Массив всех секций с параллаксом
  const parallaxBlocks = [
    { className: 'hero',     speed: 0.22 },
    { className: 'partners', speed: 0.16 },
    { className: 'livechart',speed: 0.13 },
    { className: 'buy',      speed: 0.11 },
    { className: 'socials',  speed: 0.14 }
  ];

  function parallaxUpdate() {
    const scrollY = window.scrollY || window.pageYOffset;
    parallaxBlocks.forEach(({ className, speed }) => {
      const block = document.querySelector(`.${className}`);
      if (!block) return;

      // Получаем top секции относительно страницы
      const blockRect = block.getBoundingClientRect();
      const blockTop = blockRect.top + scrollY;
      const offset = scrollY - blockTop;

      if (window.innerWidth > 800) {
        block.style.backgroundPosition = `center ${offset * speed}px`;
      } else {
        // На мобильных параллакса не будет — просто центр
        block.style.backgroundPosition = 'center center';
      }
    });
  }

  window.addEventListener('scroll', parallaxUpdate, { passive: true });
  window.addEventListener('resize', parallaxUpdate);
  parallaxUpdate();
}

// Запускаем после DOMContentLoaded
document.addEventListener('DOMContentLoaded', enableParallax);

