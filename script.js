document.addEventListener("DOMContentLoaded", () => {
    const locks = [
        'print("Hello World")',
        "if Kayla == 'Good':",
        "}",
        "else:"
    ];

    const passwordChunks = ["26", "07", "59", "69"];
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
        "“Those who seek the truth must be prepared to unlock it.",
        "The codes are hidden within the labyrinth of information,",
        "where logic and knowledge will light your path.”"
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
        if (lineIndex < lines.length) {
            const currentLine = lines[lineIndex];
            if (charIndex < currentLine.length) {
                textElement.innerHTML += currentLine.charAt(charIndex);
                charIndex++;
                setTimeout(typeLine, 30);
            } else {
                textElement.innerHTML += "<br>";
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLine, 300);
            }
        } else {
            lockSection.style.display = "block";
        }
    }

    typeLine();

    for (let i = 1; i <= 4; i++) {
        const submitBtn = document.getElementById(`submit${i}`);
        if (submitBtn) {
            submitBtn.addEventListener("click", () => {
                const inputEl = document.getElementById(`code${i}`);
                const userInput = inputEl.value.trim();
                const correctAnswer = locks[i - 1];
                const nextClass = "pass" + (i + 1);

                if (userInput === correctAnswer) {
                    alert(`✅ Correct! Unlock code fragment: ${passwordChunks[i - 1]}`);
                    if (i < 4) {
                        const nextEls = document.getElementsByClassName(nextClass);
                        for (let el of nextEls) {
                            el.style.display = "inline-block";
                        }
                    } else {
                        alert(`🎉 All locks solved! Final code: ${passwordChunks.join("")}`);
                    }
                } else {
                    alert("❌ Incorrect. Try again.");
                }
            });
        }
    }
});
