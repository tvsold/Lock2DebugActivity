let locks = [
    'print("Hello World")',
    "if Kayla == 'Good':",
    "}",
    "else:"
];

let passwordChunks = ["26", "07", "59", "69"];

document.addEventListener("DOMContentLoaded", () => {
    // Ensure the element with id "start" is available
    const textElement = document.getElementById("start");
    if (!textElement) {
        console.error('Element with id "start" not found!');
        return; // Stop execution if the element is missing
    }

    // Ensure elements for lock inputs are available
    const firstLockElements = document.getElementsByClassName("pass");
    if (firstLockElements.length === 0) {
        console.error('Elements with class "pass" not found!');
        return;
    }

    const lines = [
        "Welcome to the Second Lock",
        "You will need to examine the ancient code presented.",
        "",
        "Accessing encrypted data logs…",
        "Data retrieval successful.",
        "",
        "MESSAGE FROM THE ARCHIVE:",
        "-------------------------",
        "“Those who seek the truth must be prepared to unlock it. The codes are hidden within the labyrinth of information, where logic and knowledge will light your path.”"
    ];

    let lineIndex = 0;
    let charIndex = 0;

    // Hide all lock inputs except the first one
    for (let el of document.querySelectorAll('.pass2, .pass3, .pass4')) {
        el.style.display = "none";
    }

    // Typewriter effect for the intro text
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
            // Show first lock input after intro finishes
            for (let el of firstLockElements) {
                el.style.display = "inline-block";
            }
        }
    }

    typeLine();

    // Add submit event listeners for each lock
    for (let i = 1; i <= 4; i++) {
        const submitBtn = document.getElementById(`submit${i}`);
        if (submitBtn) {
            submitBtn.addEventListener("click", () => handleLock(i));
        } else {
            console.warn(`Submit button for lock ${i} not found.`);
        }
    }

    function handleLock(index) {
        const inputEl = document.getElementById("code" + index);
        if (!inputEl) return; // Make sure the input exists

        const userInput = inputEl.value.trim();
        const correctAnswer = locks[index - 1];
        const nextClass = "pass" + (index + 1);

        if (userInput === correctAnswer) {
            alert(`✅ Correct! Unlock code fragment: ${passwordChunks[index - 1]}`);
            if (index < 4) {
                for (let el of document.getElementsByClassName(nextClass)) {
                    el.style.display = "inline-block";
                }
            } else {
                alert(`🎉 All locks solved! Final code: ${passwordChunks.join("")}`);
            }
        } else {
            alert("❌ Incorrect. Try again.");
        }
    }
});
