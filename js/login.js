const login = document.querySelector('#login');
console.log(login);

login.addEventListener('click', () => {
    document.location.href = 'school-dashboard.html'; // Directs to Admin dashboard
})

const registerBtn = document.querySelector('#registerBtn');

registerBtn.addEventListener('click', ()  => {
    document.location.href = 'school-homepage.html'; // Directs to registration
})

const donorBtn = document.querySelector('#donorBtn');

donorBtn.addEventListener('click', () => {
    document.location.href = 'donor-homepage.html'; // Directs to donor page
})

// const formSubmit = document.querySelector('#formSubmit');
//     formSubmit.submit();

