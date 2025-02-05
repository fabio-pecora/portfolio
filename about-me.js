document.addEventListener("DOMContentLoaded", () => {
    const terminalText = `Initializing system...
                            Loading School & Work info...
                            Access granted.

                            Welcome to Fabio's Terminal.

                            User: Fabio Pecora  
                            Age: 23 years old
                            Role: Student & SWE Intern
                            Experience: Microsoft, Cuny Tech Prep, NYCC

                            Passions: ⬇️`;

    const terminalElement = document.querySelector(".terminal-text");
    const cursorElement = document.querySelector(".cursor");
    let index = 0;

    function typeEffect() {
        if (index < terminalText.length) {
            terminalElement.innerHTML += terminalText[index];
            index++;
            setTimeout(typeEffect, 10); 
        } else {
            cursorElement.style.display = "inline-block"; 
        }
    }
    setTimeout(typeEffect, 500);
});