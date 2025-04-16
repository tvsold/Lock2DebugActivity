// Correct code snippets for the locks
let locks = [
    "('Hello World')",
    "if (Kayla === 'Good')",
    "}",
    "else:"
];

function handleLock(index) {
    const input = document.getElementById("code" + index).value;
    const nextClass = "pass" + (index + 1);

    if (input === locks[index - 1]) {
        if (index < locks.length) {
            const nextElements = document.getElementsByClassName(nextClass);
            for (let el of nextElements) {
                el.style.display = "inline-block";
            }
        } else {
            alert("Congratulations! The code is 26075969.");
        }
    } else {
        alert("Incorrect password for Lock " + index + ".");
    }
}

document.addEventListener("DOMContentLoaded", () => {
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
        "“Those who solve the ancient code step deeper into the maze,",
        "where knowledge lights the way.”"
    ];

    const start = document.getElementById("start");
    const firstLock = document.getElementsByClassName("pass");
    let line = 0, char = 0;

    function typeLine() {
        if (line < lines.length) {
            const text = lines[line];
            if (char < text.length) {
                start.innerHTML += text[char];
                char++;
                setTimeout(typeLine, 40);
            } else {
                start.innerHTML += "<br>";
                char = 0;
                line++;
                setTimeout(typeLine, 500);
            }
        } else {
            for (let el of firstLock) {
                el.style.display = "inline-block";
            }
        }
    }

    const header = document.querySelector("h3");
    header.addEventListener("animationend", () => {
        header.classList.add("finished");
        setTimeout(typeLine, 300);
    });

    for (let i = 1; i <= 4; i++) {
        document.getElementById("submit" + i).addEventListener("click", () => handleLock(i));
    }
});

