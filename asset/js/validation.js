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
    
    if(userEmail === ''){
        setErrorFor(email,'Email cannot be blank!');
    } else if (userEmail !== userEmail.toLowerCase()){
          setErrorFor(email,'Please Email should be in lowerCase!');
    
    }else if (!isEmail(userEmail)) {
        setErrorFor(email,'Email is not valid!');
    } else {
        setSuccessFor(email);
        form.submit();
        form.reset();
    }
    
}

function setErrorFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className ='form-control error';

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success')
    // form.submit();
    console.log({email:email.value, name: clientName.value})

}


