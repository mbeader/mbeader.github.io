var index;

document.addEventListener('DOMContentLoaded', function() {
	index = Math.floor(Math.random() * info.length);
	if(window.location.pathname.endsWith('/photos.html')) {
		if(window.location.search.length > 1) {
			let query = window.location.search.substring(1);
			let foundIndex = info.findIndex(x => x.name == query);
			if(foundIndex >= 0)
				index = foundIndex;
		}
		setImage(index);
		document.querySelector('#next').addEventListener('click', changeImage.bind(null, true));
		document.querySelector('#prev').addEventListener('click', changeImage.bind(null, false));
	} else {
		setThumb(index);
	}
});

function setThumb(i) {
	let img = document.querySelector('aside img');
	img.setAttribute('src', 'photo/thumb/' + info[i].name + '.jpg');
	img.setAttribute('alt', info[i].subject);
	img.parentElement.setAttribute('href', 'photos.html?' + info[i].name);
}

function setImage(i) {
	displayInfo(i);
	document.querySelector('main img').setAttribute('src', 'photo/' + info[i].name + '.jpg');
}

function changeImage(next) {
	index = index + (next ? 1 : -1);
	if(index < 0)
		index = info.length-1;
	else if(index == info.length)
		index = 0;
	setImage(index);
}

function displayInfo(i) {
	document.querySelector('#date').textContent = info[i].date;
	document.querySelector('#track').textContent = info[i].track;
	document.querySelector('#location').textContent = info[i].location;
	document.querySelector('#event').textContent = info[i].event;
	document.querySelector('#series').textContent = info[i].series;
	document.querySelector('#subject').textContent = info[i].subject;
}
