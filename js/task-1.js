const categories = document.getElementById('categories');
const categoriesItem = document.querySelectorAll('.item');

categories.style.listStyle = 'none';

console.log(`Кількість категорій - ${categories.children.length}`);

categoriesItem.forEach(element => {
  const categoryTitle = element.querySelector('h2').textContent;
  const categoryElements = element.querySelectorAll('ul > li');

  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryElements.length}`);
});
