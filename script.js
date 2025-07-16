/* Animate the hero text */
const text = 'Hi! I am Christianah Agbekeye';
const target = document.querySelector('.heroSection h2');
let i = 0;

function typeWriter() {
	if (i < text.length) {
		target.textContent += text.charAt(i);
		i++;
		setTimeout(typeWriter, 80);
	}
}
target.textContent = '';
typeWriter();
