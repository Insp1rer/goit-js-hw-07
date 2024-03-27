const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const creator = document.querySelector('[data-create]');
const destroyer = document.querySelector('[data-destroy]');

boxes.style.display = 'flex';
boxes.style.flexWrap = 'wrap';
boxes.style.marginTop = '10px';
boxes.style.gap = '5px';

creator.addEventListener('click', handleCreator);
destroyer.addEventListener('click', handleDestroyer);

function handleCreator() {
  const amount = parseInt(Math.abs(input.value));

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Введіть число від 1 до 100');
  }
}

function createBoxes(amount) {
  clearBoxes();
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxes.appendChild(box);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function clearBoxes() {
  boxes.innerHTML = '';
}

function handleDestroyer() {
  clearBoxes();
}
