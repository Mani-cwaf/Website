const track = document.querySelector(".image-track");
track.dataset.percentage = 0;

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
	track.dataset.mouseDownAt = "0";
	track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
	if (track.dataset.mouseDownAt === "0") return;

	const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth;

	const percentage = (mouseDelta / maxDelta) * -100
	const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage
	const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

	track.dataset.percentage = nextPercentage;

	track.animate({
		transform: `translate(${nextPercentage}%, -50%)`
	}, { duration: 1200, fill: "forwards" });

	for (const image of track.querySelectorAll(".image")) {
		image.animate({
			objectPosition: `${100 + nextPercentage}% center`
		}, { duration: 1200, fill: "forwards" });
	}
	if (track.dataset.percentage == 0) {
		if (track.classList.contains('active')) {
			track.classList.remove('active')
		}
	} else {
		if (!track.classList.contains('active')) {
			track.classList.add('active')
		}
	}
}

window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);
window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);