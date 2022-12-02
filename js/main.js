import data from './data.js'
import { createCard } from './createCard.js';


const deckCards = document.querySelector('.deck__cards')

const scanSelect = document.getElementById('school')

function func(event) {
  let school = event.target.value;
  console.log(school)
  
}

scanSelect.addEventListener('click', func  )





data.forEach(el => deckCards.append(createCard(el)));

const scanName = document.querySelector('.formFilter__field');

const searchName = () => {

  let filterData = data.filter((el, i) => {
  return el.name.toLowerCase().includes(scanName.value) 
  });
  deckCards.innerHTML = '';
  filterData.forEach(el => deckCards.append(createCard(el)))
}

scanName.addEventListener('input', searchName)





