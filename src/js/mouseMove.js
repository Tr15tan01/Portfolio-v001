
const mouseMove = (event) => {
	let y = event.clientY;
	if (y < 100) {
		document.getElementById('navbar').style.top = '0';
	}
	// else {
	// 	document.getElementById('navbar').style.top = '-60px';
	// }
};

export default mouseMove;

window.addEventListener('mousemove', mouseMove)