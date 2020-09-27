/*=============================================
=            Carousel            =
=============================================*/

var slides = document.getElementsByClassName('slide');
var dots = document.getElementsByClassName('dot');

var slideIndex = 1;
showSlides(slideIndex);

// next/previous arrows
function plusSlides(n) {
	showSlides((slideIndex += n));
	changesColours(slideIndex);
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' dot_active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' dot_active';
}

function changesColours(i) {
	//set background color
	var bg = slides[i - 1].getAttribute('data-bg');
	var body = document.getElementsByTagName('body');
	body[0].style.backgroundColor = bg;

	//set titles color
	var title = document.getElementsByClassName('title');
	var titleColor = title[i - 1].getAttribute('data-color');
	title[i - 1].style.color = titleColor;

	//set dots and header titles color
	var dotColor = document.getElementsByClassName('dot');
	var headerTitle = document.getElementsByClassName('head_title');

	for (let index = 0; index < headerTitle.length; index++) {
		if (bg == '#cb021c') {
			headerTitle[index].style.color = '#ffffff';
			dotColor[index].style.backgroundColor = '#ffffff';
		} else {
			headerTitle[index].style.color = '#40020E';
			dotColor[index].style.backgroundColor = '#40020E';
		}
	}
}

/*=====  End of Carousel  ======*/
