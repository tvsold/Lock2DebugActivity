let locks = [
    'print("Hello World")',
    "if Kayla == 'Good':",
    "}",
    "else:"
];

let passwordChunks = ["26", "07", "59", "69"];

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("start");
    const firstLockElements = document.getElementsByClassName("pass");
    const lines = [
        "Welcome to the Second Lock",
        "You will need to examine the ancient code presented.",
        "",
        "Accessing encrypted data logs…",
        "Data retrieval successful.",
        "",
    ];

    let lineIndex = 0;
    let charIndex = 0;

    // Typewriter effect
    function typeLine() {
        if (lineIndex < lines.length) {
            const currentLine = lines[lineIndex];
            if (charIndex < currentLine.length) {
                textElement.innerHTML += currentLine[charIndex];
                charIndex++;
                setTimeout(typeLine, 50);
            } else {
                textElement.innerHTML += "<br>";
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLine, 500);
            }
        } else {
            for (let i = 0; i < firstLockElements.length; i++) {
                firstLockElements[i].style.display = "inline-block";
            }
        }
    }

    // Wait for heading animation
    setTimeout(typeLine, 2000);

    // Hide all except first lock fields
    for (let i = 0; i < firstLockElements.length; i++) {
        if (!firstLockElements[i].classList.contains("pass")) {
            firstLockElements[i].style.display = "none";
        }
    }

    // Add event listeners for each submit button
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`submit${i}`).addEventListener("click", () => {
            handleLock(i);
        });
    }

    function handleLock(index) {
        const input = document.getElementById("code" + index).value.trim();
        const correctAnswer = locks[index - 1];
        const nextClass = "pass" + (index + 1);

        if (input === correctAnswer) {
            alert(`✅ Correct! Unlock code fragment: ${passwordChunks[index - 1]}`);
            if (index < locks.length) {
                const nextElements = document.getElementsByClassName(nextClass);
                for (let i = 0; i < nextElements.length; i++) {
                    nextElements[i].style.display = "inline-block";
                }
            } else {
                alert(`All locks solved! Full code: ${passwordChunks.join("")}`);
            }
        } else {
            alert("❌ Incorrect. Try again.");
        }
    }
});

