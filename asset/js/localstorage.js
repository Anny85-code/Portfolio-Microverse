const userName = document.querySelector('#contact-form-name');
const userEmail = document.querySelector('#contact-form-email');
const userMessage = document.querySelector('#contact-form-text');

function setItemLocalStorage() {
  const myFormData = {
    name: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };
  localStorage.setItem('contactFormData', JSON.stringify(myFormData));
}

const getFormInputs = document.querySelectorAll('input, textarea');
for (let input = 0; input < getFormInputs.length; input += 1) {
  getFormInputs[input].addEventListener('change', () => {
    setItemLocalStorage();
  });
}

const storedFormData = JSON.parse(localStorage.getItem('contactFormData'));
if (storedFormData !== null) {
  userName.value = storedFormData.name;
  userEmail.value = storedFormData.email;
  userMessage.value = storedFormData.message;
}