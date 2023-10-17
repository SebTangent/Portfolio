const terminalContent = document.getElementById('terminal-content');
const passwordInput = document.createElement('input');
const passwordWrapper = document.createElement('div');

// Set the password input type and style
passwordInput.type = 'password';
passwordInput.style.border = 'none';
passwordInput.style.background = 'transparent';
passwordInput.style.color = 'white';
passwordInput.style.fontFamily = 'monospace';
passwordInput.style.outline = 'none';
passwordInput.style.width = 'auto';
passwordInput.style.display = 'inline';

// Style the password wrapper and append the input
passwordWrapper.style.display = 'inline-block';
passwordWrapper.appendChild(passwordInput);

const introText = [
    '> Name: Sebastian Tan',
    '> Location: New Jersey',
    '> Studying: Computer Science @ Rutgers University',
    '> Expected Graduation: Fall 2023', 
    '> Aspiring Software Engineer / Full Stack Developer', 
    '> Enter the password : '
];

const correctPassword = "password";
const easterEgg = "easteregg";

let line = 0;
let idx = 0;

function typeText() {
    if (idx < introText[line].length) {
        terminalContent.textContent += introText[line][idx];
        idx++;
        setTimeout(typeText, 30);
    } else if (line < introText.length - 1) {
        terminalContent.textContent += '\n';
        line++;
        idx = 0;
        setTimeout(typeText, 200);
    } else {
        appendPasswordInput();
    }
}

function appendPasswordInput() {
    terminalContent.appendChild(passwordWrapper);
    passwordInput.value = '';
    passwordInput.focus();
}

passwordInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        if (passwordInput.value === correctPassword) {
            introText.push('> Access granted! Welcome back, Sebastian!', '> Redirecting to Portfolio ... ');

            typeText().then(function() {
                const terminalElement = document.querySelector('.terminal');
                terminalElement.classList.add('fullscreen');

                setTimeout(() => {
                    terminalElement.innerHTML = '';
                }, 1000);
            });

            passwordWrapper.remove();
        } else if (passwordInput.value === easterEgg) {
            introText.push('> YOU FOUND THE EASTER EGG 🐣, now enter the password:');
            passwordWrapper.remove();
        } else {
            introText.push('> Wrong password. Try again:');
            appendPasswordInput();
        }
        typeText();
    }
});
function typeText() {
    if (idx < introText[line].length) {
        terminalContent.textContent += introText[line][idx];
        idx++;
        setTimeout(typeText, 30);
    } else if (line < introText.length - 1) {
        terminalContent.textContent += '\n';
        line++;
        idx = 0;
        setTimeout(typeText, 200);
    } else if (line === introText.length - 1) {
        appendPasswordInput(); // Only append the password input after the password prompt is typed out
    }
}

typeText();
