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
    const boxesHTML = createBoxes(amount);
    boxes.innerHTML = boxesHTML;
    input.value = '';
  } else {
    alert('Введіть число від 1 до 100');
  }
}

function createBoxes(amount) {
  const boxesArray = [];
  for (let i = 0; i < amount; i++) {
    const boxStyle = `background-color: ${getRandomHexColor()}; width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px;`;
    boxesArray.push(`<div class="box" style="${boxStyle}"></div>`);
  }
  return boxesArray.join('');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleDestroyer() {
  boxes.innerHTML = '';
}
