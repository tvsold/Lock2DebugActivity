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
        "MESSAGE FROM THE ARCHIVE:",
        "-------------------------",
        "To unlock the secrets, one must first decode the ancient lines; within the maze of knowledge, logic will guide the way."
    ];

    let lineIndex = 0;
    let charIndex = 0;

    // Hide all lock inputs initially except .pass (Lock 1)
    for (let el of document.querySelectorAll('.pass2, .pass3, .pass4')) {
        el.style.display = "none";
    }

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
            // Show first lock input after typing finishes
            for (let el of firstLockElements) {
                el.style.display = "inline-block";
            }
        }
    }

    // Start typing the message immediately
    typeLine();

    // Add submit event listeners for each lock
    for (let i = 1; i <= 4; i++) {
        const submitBtn = document.getElementById(`submit${i}`);
        if (submitBtn) {
            submitBtn.addEventListener("click", () => handleLock(i));
        }
    }

    function handleLock(index) {
        const inputEl = document.getElementById("code" + index);
        if (!inputEl) return;

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
