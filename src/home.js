export default function home() {
  const main = document.querySelector('#main');


  const hero = document.createElement('section');
  hero.classList.add('hero');

  const heroHeading = document.createElement('h2');
  heroHeading.textContent = "Furl your sails, you deserve another drink."

  const heroPara = document.createElement('p');
  heroPara.textContent = "Copper Bottom Saloon & Inn is an exclusive island-retreat for any sailer weathered enough to secure their ship to our docks. Stay as long as you like, drink as much as you like, but take your booty elsewhere if it comes with trouble in tow."

  main.appendChild(hero);
  hero.appendChild(heroHeading);
  hero.appendChild(heroPara);


  const about = document.createElement('section');
  about.classList.add('about');

  const aboutHeading = document.createElement('h2');
  aboutHeading.textContent = "How do you find us?"

  const aboutPara = document.createElement('p');
  aboutPara.textContent = "You stumble upon a map- literally! A ruthless swashbuckler like you in bound to find equally as ruthless friends. Friends of the Inn are selective, but are known to tip off those with enough notoriety to our retreat. If you manage to find us, we'll ensure you're safe comfortable."

  main.appendChild(about);
  about.appendChild(aboutHeading);
  about.appendChild(aboutPara);
}
