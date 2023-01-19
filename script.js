const btnEl = document.querySelectorAll(".btn");
const menuBtnEl = document.querySelectorAll(".menu-btn");

function preventEl(el) {
	el.forEach((item) => {
		item.addEventListener("click", (e) => {
			e.preventDefault();
		});
	});
}

preventEl(btnEl);
preventEl(menuBtnEl);
