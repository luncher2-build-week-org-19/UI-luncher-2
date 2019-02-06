const login = document.querySelector('#login');
console.log(login);

login.addEventListener('click', () => {
    document.location.href = 'school-dashboard.html';
})

const registerBtn = document.querySelector('#registerBtn');

registerBtn.addEventListener('click', ()  => {
    document.location.href = 'school-homepage.html';
})

const donorBtn = document.querySelector('#donorBtn');

donorBtn.addEventListener('click', () => {
    document.location.href = 'donor-homepage.html';
})
