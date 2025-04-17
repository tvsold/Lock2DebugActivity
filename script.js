let locks = [
    'print("Hello World")',
    "if Kayla == 'Good':",
    "}",
    "else:"
];

let passwordChunks = ["26", "07", "59", "69"];

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("start");
    const lockSection = document.getElementById("lock-section");

    const lines = [
        "Welcome to the Second Lock.",
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

    function typeLine() {
        if (lineIndex < lines.length) {
            const currentLine = lines[lineIndex];
            if (charIndex < currentLine.length) {
                textElement.innerHTML += currentLine[charIndex];
                charIndex++;
                setTimeout(typeLine, 30);
            } else {
                textElement.innerHTML += "<br>";
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLine, 300);
            }
        } else {
            // After typing is done, show lock inputs
            lockSection.style.display = "block";
        }
    }

    typeLine();

    // Add event listeners
    for (let i = 1; i <= 4; i++) {
        const submitBtn = document.getElementById(`submit${i}`);
        if (submitBtn) {
            submitBtn.addEventListener("click", () => handleLock(i));
        }
    }

    function handleLock(index) {
        const inputEl = document.getElementById("code" + index);
        const userInput = inputEl.value.trim();
        const correct = locks[index - 1];
        const nextClass = "pass" + (index + 1);

        if (userInput === correct) {
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

