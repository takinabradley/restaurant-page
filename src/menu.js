export default function menu() {
  const main = document.querySelector('#main');
  main.innerHTML = "";
  

  const menu = document.createElement('section');
  menu.classList.add('menu');

  const menuHeading = document.createElement('h2');
  menuHeading.textContent = "What's on the menu?"

  const menuPara = document.createElement('p');
  menuPara.textContent = "There's a lot our island has to offer, and most of our menu is sourced sustanably from it. For picky eaters, we have beans and toast."

  main.appendChild(menu);
  menu.appendChild(menuHeading);
  menu.appendChild(menuPara);


  const listsContainer = document.createElement('div');
  listsContainer.classList.add('lists');

  menu.appendChild(listsContainer);




  const breakfastMenu = document.createElement('div');
  breakfastMenu.classList.add("breakfast", "list")

  const breakfastHeading = document.createElement('h3');
  breakfastHeading.textContent = "Breakfast";

  const breakfastList = document.createElement('dl');

  listsContainer.appendChild(breakfastMenu);
  breakfastMenu.appendChild(breakfastHeading);
  breakfastMenu.appendChild(breakfastList);


  const breakfastItem1 = document.createElement('dt')
  breakfastItem1.textContent = "Island Dodo Eggs";

  const breakfastDescription1 = document.createElement('dd');
  breakfastDescription1.textContent = "Our island is as inexplicably vast as it is hidden. Upon it's discovery, many animals long thought to be lost to time have been rediscovered. Enjoy this delicacy on us... but remember there are more dangerous creatures to look out for if you stray too far from the saloon."

  const breakfastItem2 = document.createElement('dt')
  breakfastItem2.textContent = "Fish & Eggs";

  const breakfastDescription2 = document.createElement('dd');
  breakfastDescription2.textContent = "Just in case you haven't tired of the sea, there's plenty of fish 'round here that still needs to get ate."

  const breakfastItem3 = document.createElement('dt')
  breakfastItem3.textContent = "Iguana on a stick";

  const breakfastDescription3 = document.createElement('dd');
  breakfastDescription3.textContent = "If you want to pretend you're surviving alone on a remote island, we're happy to spear a lizard for you and have a laugh watching you cook it over a fire on the nearby beach."

  breakfastMenu.appendChild(breakfastItem1);
  breakfastMenu.appendChild(breakfastDescription1);
  breakfastMenu.appendChild(breakfastItem2);
  breakfastMenu.appendChild(breakfastDescription2);
  breakfastMenu.appendChild(breakfastItem3);
  breakfastMenu.appendChild(breakfastDescription3);




  const lunchMenu = document.createElement('div');
  lunchMenu.classList.add("lunch", "list");

  const lunchHeading = document.createElement('h3');
  lunchHeading.textContent = "Lunch";

  const lunchList = document.createElement('dl');

  listsContainer.appendChild(lunchMenu);
  lunchMenu.appendChild(lunchHeading);
  lunchMenu.appendChild(lunchList);


  const lunchItem1 = document.createElement('dt')
  lunchItem1.textContent = "Fish Jerk & Turf";

  const lunchDescription1 = document.createElement('dd');
  lunchDescription1.textContent = "A popular snack of the long-timers. Fish Jerky served with the first exotic animal hauled out of the nearby forest for lunch"

  const lunchItem2 = document.createElement('dt')
  lunchItem2.textContent = "Boiled Crab";

  const lunchDescription2 = document.createElement('dd');
  lunchDescription2.textContent = "Boiled crab smothered in butter. Cooked over a roaring fire in a giant pot. Bruce likes to cackle like a witch while stirring the pot."


  lunchMenu.appendChild(lunchItem1);
  lunchMenu.appendChild(lunchDescription1);
  lunchMenu.appendChild(lunchItem2);
  lunchMenu.appendChild(lunchDescription2);

  

  const dinnerMenu = document.createElement('div');
  dinnerMenu.classList.add("dinner", "list")
  const dinnerHeading = document.createElement('h3');
  dinnerHeading.textContent = "Dinner";

  const dinnerList = document.createElement('dl');

  listsContainer.appendChild(dinnerMenu);
  dinnerMenu.appendChild(dinnerHeading);
  dinnerMenu.appendChild(dinnerList);


  const dinnerItem1 = document.createElement('dt')
  dinnerItem1.textContent = "Coconut Shrimp";

  const dinnerDescription1 = document.createElement('dd');
  dinnerDescription1.textContent = "Boss's favorite dish. He's often seen off in the corner sharing small pieces with his cat."

  const dinnerItem2 = document.createElement('dt')
  dinnerItem2.textContent = "Beans & Toast";

  const dinnerDescription2 = document.createElement('dd');
  dinnerDescription2.textContent = "All-you-can-eat beans and toast. A cheap and fufilling meal for those arriving with a light wallet."

  const dinnerItem3 = document.createElement('dt')
  dinnerItem3.textContent = "Beach Buffet!";

  const dinnerDescription3 = document.createElement('dd');
  dinnerDescription3.textContent = "Join us around the campfire! Bring a meal to share, it's a potluck! We always enjoy rare meals that come with new-arrivers on the island."

  dinnerMenu.appendChild(dinnerItem1);
  dinnerMenu.appendChild(dinnerDescription1);
  dinnerMenu.appendChild(dinnerItem2);
  dinnerMenu.appendChild(dinnerDescription2);
  dinnerMenu.appendChild(dinnerItem3);
  dinnerMenu.appendChild(dinnerDescription3);
}