import bannerStyles from './banner.lazy.css';
import homeStyles from './home.lazy.css';
import menuStyles from './menu.lazy.css';

import home from './home.js';
import menu from './menu.js';


const styleLoader = (function () { //loads styles for main content area
  let currentStyle = 'none';
  function setStyle(stylesheet) {
    if(stylesheet !== homeStyles && stylesheet !== menuStyles) {
      return;
    } else if(currentStyle !== 'none') {
      currentStyle.unuse();
      currentStyle = stylesheet;
      currentStyle.use();
    } else {
      currentStyle = stylesheet;
      currentStyle.use();
    }
  };
  return {setStyle};
})();

/*function allowNavigation() {

}*/
bannerStyles.use();
styleLoader.setStyle(homeStyles);
home();