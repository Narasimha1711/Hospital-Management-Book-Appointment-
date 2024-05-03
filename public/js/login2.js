const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const inp = document.getElementsByTagName('input');

if (document.cookie.includes("sessionToken")) {
    // User is authenticated, redirect to home page
    window.location.href = "/home";
}

function alert() {
    console.log("1")
    // alert()
    console.log(!inp.value);
    if(!inp.value === undefined) {
        alert("All fields are mandotory");
    }
}
