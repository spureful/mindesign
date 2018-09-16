function viewMoreServices() {

	const openBtn = document.querySelector('.js-show-more');
	const closeBtn = document.querySelector('.js-close-more');
	const moreServices = document.querySelector('.services-full');
	const services = document.querySelector('.services');
	

	let op = 0;

	openBtn.addEventListener('click', function () {

		moreServices.style.display = "block";
		services.style.display = "none";


		setTimeout(function openServ() {
			if (op < 1) {

				op += 0.1;
				moreServices.style.opacity = op;

				setTimeout(openServ, 100);

			}


		}, 100);

	});

	closeBtn.addEventListener('click', function () {

		setTimeout(function closeServ() {
			if (op > 0) {

				op -= 0.1;
				moreServices.style.opacity = op;

				setTimeout(closeServ, 100);

			} else {
				moreServices.style.display = "none";
				services.style.display = "block";
				
			}

		}, 100);


	});

}

viewMoreServices();


function logoScroll() {
	const logo = document.querySelector(".logo");
	const wrapper = document.querySelector('.wrapper');
	let screenWdth = screen.width;
	let wrapWdth = wrapper.offsetWidth;
	let needWidth = (screenWdth - wrapWdth)/2;



	window.addEventListener('scroll', function () {
		logo.classList.add('logo_animate');
		logo.style.left = needWidth + 36 + 'px';
		logo.style.top = 10 + 'px';

		console.log(screenWdth);
		console.log(wrapWdth);
		console.log(needWidth);

	});




}

logoScroll();
