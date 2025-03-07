document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(
					'show');
			} else {
				entry.target.classList.remove(
					'show');
			}
		});
	}, {
		threshold: 0.1, // Trigger when 10% of the element is visible
		rootMargin: "100px" // Trigger 100px before the element enters view
	});
	
	document.querySelectorAll('.hidden').forEach((el) =>
		observer.observe(el));
});

// responsive hamburger menu code

const ham = document.getElementById('ham');
const sidebar = document.getElementById('sidebar');
const close = document.getElementById('close');

ham.addEventListener('click', () => {
	sidebar.classList.add('show');
});

close.addEventListener('click', () => {
	sidebar.classList.remove('show');
});

// jump to menu button redirection 
const jumpBtn = document.getElementById('btn1');
jumpBtn.addEventListener('click', () => {
	window.location.href = '/menu/menu.html';
});