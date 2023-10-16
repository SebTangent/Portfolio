const terminalContent = document.getElementById('terminal-content');
const passwordInput = document.createElement('input');  // Input for password

const introText = [
    '> Name: Sebastian Tan',
    '> Location: New Jersey',
    '> Studying: Computer Science @ Rutgers University',
    '> Expected Graduation: Fall 2023', 
    '> Aspiring Software Engineer / Full Stack Developer', 
    '> Enter the password : '
];

const correctPassword = "yourPassword";  // Replace with your desired password

let line = 0;
let idx = 0;

function typeText() {
    if (idx < introText[line].length) {
        terminalContent.textContent += introText[line][idx];
        idx++;
        setTimeout(typeText, 50);
    } else if (line < introText.length - 1) {
        terminalContent.textContent += '\n';
        line++;
        idx = 0;
        setTimeout(typeText, 200);
    } else {
        // Append the input for password once all text is typed out
        terminalContent.appendChild(passwordInput);
        passwordInput.focus();
    }
}

passwordInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {  // Check if Enter is pressed
        if (passwordInput.value === correctPassword) {
            terminalContent.textContent += '\n> Access granted!';
        } else {
            terminalContent.textContent += '\n> Error: Invalid password';
        }
        passwordInput.remove();  // Remove the input field
    }
});

typeText();