const btnEl = document.querySelectorAll(".btn");

btnEl.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
    });
});