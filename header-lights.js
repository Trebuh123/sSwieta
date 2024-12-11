document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".naglowek h1");
    const text = header.textContent;
    header.textContent = ""; // Czyści zawartość nagłówka

    const colors = ["#e74c3c", "#f1c40f", "#2ecc71", "#1e58a8", "#9b59b6"];
    const decorations = ["🎄", "✨", "🎅", "❄", "🎁"]; // Świąteczne ozdoby

    // Tworzy każdą literę jako osobny element span
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.color = colors[index % colors.length];
        span.style.fontSize = "1.5em";
        span.style.margin = "0 5px";
        span.style.display = "inline-block";
        span.style.position = "relative";
        header.appendChild(span);

        // Dodaj ozdobę pod literą
        const decoration = document.createElement("span");
        decoration.textContent = decorations[index % decorations.length];
        decoration.style.position = "absolute";
        decoration.style.bottom = "-25px";
        decoration.style.fontSize = "0.3em";
        decoration.style.left = "50%";
        decoration.style.transform = "translateX(-50%)";
        decoration.style.animation = `bounce 2s infinite ${Math.random()}s`;
        span.appendChild(decoration);
    });

    // Funkcja zmienia kolory liter co sekundę
    function changeLetterColors() {
        const spans = header.querySelectorAll("span");
        spans.forEach((span, index) => {
            span.style.color = colors[Math.floor(Math.random() * colors.length)];
        });
    }

    setInterval(changeLetterColors, 1000);

    // Stylizacja animacji ozdób
    const style = document.createElement("style");
    style.textContent = `
        @keyframes bounce {
            0%, 100% {
                transform: translateY(0) translateX(-50%);
            }
            50% {
                transform: translateY(-10px) translateX(-50%);
            }
        }
    `;
    document.head.appendChild(style);
});
