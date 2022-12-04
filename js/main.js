import data from './data.js'
import { createCard } from './createCard.js';


const scanName = document.querySelector('.formFilter__field');
const deckCards = document.querySelector('.deck__cards')
const scanSchool = document.getElementById('school')

const listSchool = data.map(el => el.house).filter( el => el.length > 0)
let unicSchool=[...new Set(listSchool)] 
console.log(unicSchool)
unicSchool.forEach((el) => {
  const option = document.createElement('option')
        option.textContent = `${el}`
        option.setAttribute("value", `${el}`)
  scanSchool.append(option)
}
);

data.forEach((el) => deckCards.append(createCard(el)));

function multiSearch() {
  if (scanSchool.value.length > 0) {
    let schoolData = data.filter((el) =>
      el.house.toLowerCase().includes(scanSchool.value.toLowerCase()),
    );
    deckCards.innerHTML = '';
    schoolData.forEach((el) => deckCards.append(createCard(el)));

    let namesData = schoolData.filter((el) =>
      el.name.toLowerCase().includes(scanName.value.toLowerCase()),
    );
    deckCards.innerHTML = '';
    namesData.forEach((el) => deckCards.append(createCard(el)));
  } else {
    let namesData = data.filter((el) =>
      el.name.toLowerCase().includes(scanName.value.toLowerCase()),
    );
    deckCards.innerHTML = '';
    namesData.forEach((el) => deckCards.append(createCard(el)));
  }
}

scanName.addEventListener('input', multiSearch);
scanSchool.addEventListener('click', multiSearch);

function keyQ(event) {
  if (event.code === 'KeyQ') {
    deckCards.innerHTML = '';
    data.forEach((el) => deckCards.append(createCard(el)));
  }
}
document.addEventListener('keydown', keyQ);










