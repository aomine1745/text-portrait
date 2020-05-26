const bg = document.getElementById('bg')

window.onmousemove = e => {
	bg.style.width = e.clientX + 'px'
}