document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.createElement("div");
    snowContainer.style.position = "fixed";
    snowContainer.style.top = "0";
    snowContainer.style.left = "0";
    snowContainer.style.width = "100%";
    snowContainer.style.height = "100%";
    snowContainer.style.pointerEvents = "none";
    snowContainer.style.zIndex = "1000";
    document.body.appendChild(snowContainer);

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.textContent = "❄";
        snowflake.style.position = "absolute";
        snowflake.style.color = "#ffffff";
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.top = `-10px`;
        snowflake.style.opacity = Math.random().toString();
        snowflake.style.animation = `fall ${Math.random() * 5 + 5}s linear`;
        snowContainer.appendChild(snowflake);

        snowflake.addEventListener("animationend", () => {
            snowflake.remove();
        });
    }

    setInterval(createSnowflake, 300);

    const style = document.createElement("style");
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh);
            }
        }
    `;
    document.head.appendChild(style);
});
