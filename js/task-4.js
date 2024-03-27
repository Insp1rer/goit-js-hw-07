const form = document.querySelector('.login-form');

form.addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;

  if (
    elements.email.value.trim().length === 0 ||
    elements.password.value.trim().length === 0
  ) {
    alert('All form fields must be filled in');
  }

  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  if (
    elements.email.value.trim().length > 0 &&
    elements.password.value.trim().length > 0
  ) {
    console.log(info);
  }

  event.currentTarget.reset();
}
