//stylesheets
import bannerStyles from './banner.lazy.css';
import homeStyles from './home.lazy.css';
import contactStyles from './contact.lazy.css';
import menuStyles from './menu.lazy.css';

//page loaders
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';


const pageLoader = (function () { 
  let currentStyle = 'none';

  function _setStyle(stylesheet) {
    if(stylesheet !== homeStyles && stylesheet !== menuStyles && stylesheet !== contactStyles) {
      return;
    } else if(currentStyle === 'none') {
      currentStyle = stylesheet;
      currentStyle.use();
    } else {
      currentStyle.unuse();
      currentStyle = stylesheet;
      currentStyle.use();
    }
  };

  function _setPage(page) {
    page();
  }

  function load(stylesheet, page) { //loads a stylesheet with page content
    _setStyle(stylesheet);
    _setPage(page);
  }

  return {load};
})();

function allowNav() {
  const links = document.querySelectorAll('.nav li');
  links.forEach( (link) => link.addEventListener('click', (e) => {
    const className = e.target.className;

    if(className === 'menu') {
      pageLoader.load(menuStyles, menu);
    } else if (className === 'home') {
      pageLoader.load(homeStyles, home);
    } else if (className === 'contact') {
      pageLoader.load(contactStyles, contact);
    }
  }));
}

function init() {
  bannerStyles.use(); //applies styling to banner in index.html
  pageLoader.load(homeStyles, home);
  allowNav();
}

init();

