const translations = {
  en: {
    title: "Mr.Cartonix Coin (CARTONIX)",
    title2: "The cardboard hero's crypto adventure. Join the revolution!",
    title3: "What is CARTONIX?",
    title4: "Mr.Cartonix is not just a meme. It's a crypto movement! He started with a box factory, and now he has his own token, CARTONIX.",
    title5: "100% community-oriented",
    title6: "Meme, utility and fun",
    title7: "The mission is to show that the crypt can be fun and accessible.",
    title8: "Cryptocurrencies Price",
    title9: "Buy",
    title10: "Sell",
    title11: "Tokenomics",
    title12: "Total offer: 1,000,000,000 CARTONIX",
    title13: "Community and listing: 70% (700 mln)",
    title14: "Team and development: 30% (300 mln 255 million are blocked for 12 months)",
    title15: "NFT Collection",
    title16: "Roadmap",
    title17: "Creation and launch of the CARTONIX token",
    title18: "Launching memes and videos on social media",
    title19: "Listing on DEX",
    title20: "Creating an NFT collection",
    title21: "Selling social media ads and buying CARTONIX tokens",
    title22: "Creating a Game with Mr.Cartonix",
    title23: "Our team",
    title24: "Mr.Cartonix — Creator",
    title25: "Soon — Developer on Solana",
    title26: "Soon — NFT-artist",
    title27: "Soon — Content maker",
    title28: "Frequently Asked Questions (FAQ)",
    title29: "How do I buy CARTONIX?",
    title30: "Click the buy button and buy a token for SOL.",
    title31: "Where can I store CARTONIX?",
    title32: "You can use Phantom wallets or any Solana-compatible ones.",
    title33: "When is the NFT launch?",
    title34: "The launch is scheduled for Q3 2025. Stay tuned on social media.",
    title35: "© 2025 Mr.Cartonix Coin — Powered by memes and blockchain",

  },
  ru: {
    title: "Mr.Cartonix монета (CARTONIX)",
    title2: "Крипто-приключение картонного героя. Присоединяйтесь к революции!",
    title3: "Что такое CARTONIX?",
    title4: "Mr.Cartonix - это не просто мем. Это криптодвижение! Он начинал с работы на фабрике по изготовлению коробок, а теперь у него есть свой собственный токен CARTONIX.",
    title5: "100% ориентированный на сообщество",
    title6: "Мем, полезность и веселье",
    title7: "Миссия состоит в том, чтобы показать, что крипта может быть веселой и доступной.",
    title8: "Цена криптовалюты",
    title9: "Купить",
    title10: "Продать",
    title11: "Токеномика",
    title12: "Общее предложение: 1,000,000,000 CARTONIX",
    title13: "Комьюнити и листинг: 70% (700 млн)",
    title14: "Команда и развитие: 30% (300 млн) - (255 миллионов заблокированы на 12 месяцев)",
    title15: "NFT Коллекция",
    title16: "Дорожная карта",
    title17: "Создание и запуск токена CARTONIX",
    title18: "Запуск мемов и видеороликов в социальных сетях",
    title19: "Листинг на DEX",
    title20: "Создание NFT коллекции",
    title21: "Продажа рекламы в социальных сетях и покупка токенов CARTONIX",
    title22: "Создаем игру вместе с Mr.Cartonix",
    title23: "Наша команда",
    title24: "Mr.Cartonix — Создатель",
    title25: "Скоро - разработчик на Solana",
    title26: "Скоро - NFT-художник",
    title27: "Скоро - Создатель контента",
    title28: "Часто задаваемые вопросы (FAQ)",
    title29: "Как мне купить CARTONIX?",
    title30: "Нажмите кнопку Купить и купите токен за SOL.",
    title31: "Где я могу хранить CARTONIX?",
    title32: "Вы можете использовать Phantom кошелек или любые кошельки, совместимые с Solana.",
    title33: "Когда состоится запуск NFT?",
    title34: "Запуск запланирован на 4 квартал 2025 года. Следите за обновлениями в социальных сетях.",
    title35: "© 2025 Mr.Cartonix Coin — Работает на мемах и блокчейне",
  },
  es: {
    
  },
  de: {
    
  }
};

function updateLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("languageSelect");
  updateLanguage(select.value);
  select.addEventListener("change", () => {
    updateLanguage(select.value);
  });
});
