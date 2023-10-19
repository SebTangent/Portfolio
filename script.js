const terminalContent = document.getElementById('terminal-content');
const passwordInput = document.createElement('input');
const passwordWrapper = document.createElement('div');

const portfolioContent = document.getElementById('portfolio-content');
const portfolioInput = document.getElementById('portfolio-input');
const closeButton = document.querySelector('.taskbar .close');
const minimizeButton = document.querySelector('.taskbar .minimize');
const laptopScreen = document.querySelector('.laptop__screen');

// Close button event



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
    '> Enter password to learn more : '
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
            introText.push('> Access granted!', '> Redirecting to Portfolio ... ');

            typeText();

            setTimeout(() => {
                const terminalElement = document.querySelector('.terminal');
                const portfolioElement = document.getElementById('portfolio');

                // Hide the terminal
                terminalElement.style.display = 'none';

                // Display the portfolio
                portfolioElement.style.display = 'block';

            }, 5000);

            passwordWrapper.remove();

        } else if (passwordInput.value === easterEgg) {
            introText.push('> YOU FOUND THE EASTER EGG 🐣, now enter the password:');
            appendPasswordInput();
            typeText();

        } else {
            introText.push('> Wrong password. Try again:');
            appendPasswordInput();
            typeText();
        }
    }
});

let currentOutput = "";

function typeOutput() {
    if (currentOutput.length > 0) {
        portfolioContent.textContent += currentOutput.charAt(0);
        currentOutput = currentOutput.slice(1);
        setTimeout(typeOutput, 30);
    }
}

portfolioInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        const command = portfolioInput.value.trim().toLowerCase();
        
        switch(command) {
            case 'about':
                currentOutput = `
                > 👋 About Me
                > 
                > Hello! I'm Sebastian Tan. Based in Oradell, NJ, I'm on a journey to become a leading name in the Software Engineering and Full-Stack Development realm. Currently in the final phases of my B.A. in Computer Science at Rutgers University, I'm enriching my knowledge palette with a plethora of subjects like AI, Systems Programming, and more.
                > 
                > 🛠️ Programming Languages / Software
                > 
                > Proficient in Python, C++, HTML/CSS, and JavaScript and have a good grip on C and Java as well. Whether it's Windows, Linux, or Mac, I comfortably navigate through any operating system.
                > 
                > 🚀  Professional Experience
                > 
                > At The Coding Place in Leonia, NJ, my role as a Coding Instructor isn't just a job - it's a mission. I believe in fostering a dynamic learning environment that transcends traditional teaching. From beginners to those ready to deep dive, I'm here to guide, ensuring each one harnesses their coding potential.
                > 
                > 🎨 A Bit More About Me
                > 
                > When I'm not lost in the world of codes and algorithms, you'll find me indulging in art, grooving to some tunes, or getting competitive with sports. These hobbies are more than just pastimes; they're the fuel to my creativity and drive in the professional world.
                `;
                break;
            case 'projects':
                currentOutput = '> Projects section content here...';
                break;
            case 'resume':
                currentOutput = '> Resume content here...';
                break;
            case 'socials':
                currentOutput = `
                > 🔗 My Social Media & Professional Links
                > 
                > 🌐 LinkedIn: linkedin.com/in/sebtan
                > 
                > 📁 GitHub: github.com/SebTangent
                > 
                > 📧 Email: sebyanuardy@gmail.com
                > 
                > 📞 Contact: (862) 596-2522
                > 
                > Feel free to copy any link to connect, collaborate, or just chat. I'm always open to new opportunities and discussions.
                `;
            
                break;
            default:
                currentOutput = `> Command "${command}" not recognized. Try again.`;
                break;
        }

        // Append the user's command WITHOUT the prompt
        portfolioContent.textContent += `\nuser@SebBookPro :$ ${command}\n`; 
        typeOutput();  // Call the function to start typing the output

        // Clear the input field
        portfolioInput.value = '';

        // Automatically scroll to the bottom after adding content
        portfolioContent.scrollTop = portfolioContent.scrollHeight;
    }
});

closeButton.addEventListener('click', function() {
    const portfolioElement = document.getElementById('portfolio');
    portfolioElement.style.display = 'none';
    laptopScreen.style.display = 'block';
});

// Minimize button event
minimizeButton.addEventListener('click', function() {
    const portfolioElement = document.getElementById('portfolio');
    portfolioElement.style.display = 'none';
    laptopScreen.style.display = 'block';
});

typeText();
