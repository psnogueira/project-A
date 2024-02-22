const translations = {
    en: {
      welcome: 'Welcome to my website!',
      switchLanguage: "Switch Language",
      box_title: "The Great Mountains",
      body1: "Explore our articles on <b>adventure travel</b>, <b>camping tips</b>, and <b>nature photography</b>. Discover hidden trails, learn how to pitch a tent like a pro, and get inspired by breathtaking landscapes captured through the lens.",
      button_seemore: "See more",
    },
    pt: {
      welcome: 'Bem vindo ao meu site!',
      switchLanguage: "Trocar Idioma",
      box_title: "As Grandes Montanhas",
      body1: "Explore nossos artigos sobre <b>trilhas</b>, <b>dicas de acampamento</b>, e <b>fotografia da natureza</b>. Descubra trilhas ocultas, Aprenda como montar uma barraca como um pro, e seja inspirado por paisagens magníficas capturadas através das lentes.",
      button_seemore: "Veja mais",
    },
};

// Tags variables
var button = document.getElementById("languageButton");
var title = document.getElementById("title1");
var body1 = document.getElementById("body1");
var button_seemore = document.getElementById("button_seemore");

// Update variables after html document is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    button = document.getElementById("languageButton");
    title = document.getElementById("title1");
    body1 = document.getElementById("body1");
    button_seemore = document.getElementById("button_seemore");
})

function changeLanguage()
{
    // Toggle between English and Portuguese
    const currentLanguage = document.documentElement.lang;
    const nextLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    document.documentElement.lang = nextLanguage;

    title.innerHTML = translations[nextLanguage].box_title;
    button.innerHTML = translations[nextLanguage].switchLanguage;
    body1.innerHTML = translations[nextLanguage].body1;
    button_seemore.innerHTML = translations[nextLanguage].button_seemore;
    // Update other elements with their respective translations
}