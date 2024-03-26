const form = document.querySelector('.login-form');

form.addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();
  console.log(event);
}
