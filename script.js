document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector(".typing-text");
    const words = ["a Full Stack Developer", "a Data Analyst", "a Python Enthusiast"];
    let index = 0, charIndex = 0;
    let typingSpeed = 150;
    let erasingSpeed = 100;
    let delayBetweenWords = 2000;

    function type() {
        if (charIndex < words[index].length) {
            typingText.textContent += words[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenWords);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = words[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            index = (index + 1) % words.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

// Contact Form Handling
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent!");
});