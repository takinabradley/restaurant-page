export default function contact() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  
  const message = document.createElement('div');
  message.classList = "cryptic-message";
  message.textContent = 'You Know What To Do';
  main.appendChild(message);
  
  const changeMessage = () => {
    const character = [
      0,1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','G','H','I','J','K','L','M',
      'N','O','P','Q','R','S','T', 'U', 'V', 'W', 'X','Y','Z','a','b','c','d',
      'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v',
      'w','x','y','z'
    ]
    const randomIndex = Math.floor(Math.random() * message.textContent.length);
    const randomCharacter = character[Math.floor(Math.random() * character.length)];
    
    message.textContent = message.textContent.substring(0, randomIndex) + randomCharacter + message.textContent.substring(randomIndex + 1);
  }
    
  setInterval(changeMessage, 1000);
}