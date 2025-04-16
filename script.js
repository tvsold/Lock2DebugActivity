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
        "Project BITWISE archive, last accessed: September 24th, 1978",
        "Status: DECOMMISSIONED",
        "Reason: [REDACTED]",
        "",
        "MESSAGE FROM THE ARCHIVE:",
        "-------------------------",
        "“Those who seek the truth must be prepared to unlock it. The codes are hidden within the labyrinth of information, where logic and knowledge will light your path.”"
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
        }
    }

    // Start typing immediately
    typeLine();

    // Add lock handlers
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`submit${i}`).addEventListener("click", () => {
            handleLock(i);
        });
    }

    function handleLock(index) {
        const input = document.getElementById("code" + index).value.trim();
        const correct = locks[index - 1];
        const nextClass = "pass" + (index + 1);

        if (input === correct) {
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
