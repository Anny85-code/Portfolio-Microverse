const form = document.getElementById('contact-me-form');
const clientName = document.getElementById('contact-form-name');
const email = document.getElementById('contact-form-email');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const userName = clientName.value.trim();
    const userEmail = email.value.trim();

    if(userName === ''){
        setErrorFor(clientName,'Username cannot be blank!');
    } else {
        setSuccessFor(clientName);
    }
    
    if(userEmail === '' && !userEmail.toLowerCase()){
        setErrorFor(email,'Email cannot be blank!');
    } else if (!isEmail(userEmail)) {
        setErrorFor(email,'Email is not valid!');
    } else {
        setSuccessFor(email);
    }

}

function setErrorFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.classList.replace('success', 'error');

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success')
    // form.submit();
    console.log({email:email.value, name: clientName.value})

}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
