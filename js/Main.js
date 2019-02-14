class Dropmenu {
    constructor (element) {
        this.element = element; 
        // console.log(this.element);

        this.button = this.element.querySelector('.dropmenu-btn');
        // console.log(this.button);

        this.content = this.element.querySelector('.dropmenu-content');
        // console.log(this.content);

        this.button.addEventListener('click', () => this.toggleContent());
    }

    toggleContent () {  //Toggles the menu button to show and hide links
        // console.log(this.button);
        this.content.classList.toggle('dropmenu-hidden');
    }
}






//Selects the dropmenu class and cycles through all of the elements within the div
const menu = document.querySelectorAll('.dropmenu').forEach(dropmenu => new Dropmenu (dropmenu));


const signup = document.querySelectorAll('.cta-btn'); //Redirects SignUp and Donate buttons on homepage to Netlify
// console.log(signup);

signup.forEach(event => {
    event.addEventListener('click', event => {
        // console.log(`${event.type}`);
        window.location.href = 'https://luncher2.netlify.com/';
    });
}) ;