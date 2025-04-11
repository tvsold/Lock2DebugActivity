let passwordParts = ['', '', '', ''];

function debugCode(segment) {
    let outputElement = document.getElementById(`output${segment}`);

    if (segment === 1) {
        // Simulate the debugging of the first code piece
        let fixedCode = true; // Simulate fix
        if (fixedCode) {
            outputElement.textContent = 'Code fixed! First two digits: 24';
            passwordParts[0] = '24';
        }
    } else if (segment === 2) {
        // Simulate the debugging of the second code piece
        let fixedCode = true; // Simulate fix
        if (fixedCode) {
            outputElement.textContent = 'Code fixed! Second two digits: 96';
            passwordParts[1] = '96';
        }
    } else if (segment === 3) {
        // Simulate the debugging of the third code piece
        let fixedCode = true; // Simulate fix
        if (fixedCode) {
            outputElement.textContent = 'Code fixed! Third two digits: 30';
            passwordParts[2] = '30';
        }
    } else if (segment === 4) {
        // Simulate the debugging of the fourth code piece
        let fixedCode = true; // Simulate fix
        if (fixedCode) {
            outputElement.textContent = 'Code fixed! Fourth two digits: 14';
            passwordParts[3] = '14';
        }
    }

    // Update the final password
    let finalPassword = passwordParts.join('');
    document.getElementById('password').textContent = finalPassword;

    // If all parts are solved, show the full password
    if (passwordParts.every(part => part !== '')) {
        document.getElementById('password').textContent = finalPassword;
    }
}

