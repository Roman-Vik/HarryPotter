import data from './data.js'
import { createCard } from './createCard.js';


const deckCards = document.querySelector('.deck__cards');


data.forEach(el => deckCards.append(createCard(el)));

const scanName = document.querySelector('.formFilter__field');
//console.log(scanName)




const searchName = () => {
  let filterData = data.filter((el, i) => {
  return el.name.toLowerCase().includes(scanName.value) 
  });
  deckCards.innerHTML = '';
  filterData.forEach(el => deckCards.append(createCard(el)))
 
}

scanName.addEventListener('input', searchName)





