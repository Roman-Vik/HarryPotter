export const createCard = (el) => {
  
  const deckCard = document.createElement('div');
  const deckImg = document.createElement('div');
  const img = document.createElement('img');
  const deckBio = document.createElement('div');
  const deckWraper = document.createElement('div');
  const name = document.createElement('p');
  const actor = document.createElement('p');
  const gender = document.createElement('p');
  const house = document.createElement('p');
  const wand = document.createElement('p');
  const alive = document.createElement('p');

  deckCard.className = 'deck__card';
  deckImg.className = 'deck__img';
  img.className = 'deck__photo';
  img.setAttribute('src', 'https://via.placeholder.com/334x192');
  img.setAttribute('alt', 'avatar');
  deckBio.className = 'deck__bio';
  deckWraper.className = 'deck__wraper';
  name.className = 'deck__text';
  name.classList.add('deck__text-bolt');
  actor.className = 'deck__text';
  gender.className = 'deck__text';
  house.className = 'deck__text';
  wand.className = 'deck__text';
  alive.className = 'deck__text';

  name.textContent = el.name;
  actor.textContent = `Actor: ${el.actor}`;
  gender.textContent = `Gender: ${el.gender}`;
  house.textContent = `House: ${el.house}`;
  wand.textContent = `Wand core: ${el.wand.core}`;
  alive.textContent = `Alive: ${el.alive === true ? 'yes': 'no'}`;

  deckCard.append(deckImg, deckBio);
  deckImg.append(img);
  deckBio.append(deckWraper);
  deckWraper.append(name, actor, gender, house, wand, alive);

  return deckCard;
};
