$(document).ready(function() {

	$('.slider').slick({
		arrows: false,
		infinity: false,
		slidesToShow: 8,
		autoplay: true,

		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 3,
				variableWidth: true,
				
			}
		}
		
		]

	});

	$('.slider__action').slick({
		arrows: false,
		infinity: false,
		slidesToShow: 4,
		autoplay: true,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				
			}
		},

		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				variableWidth: true,
				
			}
		}
		
		]
	});


	$('.about__slider').slick({
		arrows: false,
		slidesToShow: 4,
		infinity: false,
	});

	/* Modal*/
	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");

	modalCall.on("click", function(event) {
		event.preventDefault();
		let $this = $(this);
		let modalId = $this.data('modal');

		$(modalId).addClass('show');
		$("body").addClass('no-scroll');

		setTimeout(function() {
			$(modalId).find('.modal__dialog').css({
				transform: "scale(1)"
			});
		}, 200);
	});

	modalClose.on("click", function(event) {
		event.preventDefault();
		let $this = $(this);
		let modalParent = $this.parents('.modal');

		modalParent.find('.modal__dialog').css({
			transform: "scale(0)"
		});

		setTimeout(function() {
			modalParent.removeClass('show');
			$("body").removeClass('no-scroll');
		}, 200);

	});	

	$(".modal").on("click", function(event) {
		let $this = $(this);

		$this.find('.modal__dialog').css({
			transform: "scale(0)"
		});

		setTimeout(function() {
			$this.removeClass('show');
			$("body").removeClass('no-scroll');
		}, 200);

	});

	$(".modal__dialog").on("click", function(event) {
		event.stopPropagation();
	});



	/*Fixed Header*/ 
	let headerSecond = $("#headerSecond");
	let headerFirst = $("#headerFirst");
	let headerFirstH = headerFirst.innerHeight();
	let scrollPos = $(window).scrollTop();
	let navHeader = $("#navHeader")

	checkScroll(scrollPos, headerFirstH);

	$(window).on("scroll resize", function() {
		headerFirstH = headerFirst.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, headerFirstH);

	});

	function checkScroll(scrollPos, headerFirstH){
		if (scrollPos > headerFirstH) {
			headerSecond.addClass("fixed");
			navHeader.addClass("fixed");

		} else {
			headerSecond.removeClass("fixed");
			navHeader.removeClass("fixed");
		}
	}


});

/* Burger*/
const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('#nav');

navToggle.addEventListener("click", function(){
	event.preventDefault();
	navToggle.classList.toggle("active");
});

navToggle.addEventListener("click", function(){
	event.preventDefault();
	nav.classList.toggle("show");
});

/* Tabs*/
const tabsBtn = document.querySelectorAll(".about__tab");
const tabsBtnSize = document.querySelectorAll(".about__tab-size");

tabsBtn.forEach(function(item) {
	item.addEventListener("click", function() {
		let currentBtn = item;
		compare(tabsBtn, currentBtn);
	});
});

tabsBtnSize.forEach(function(item) {
	item.addEventListener("click", function() {
		let currentBtn = item;
		compare(tabsBtnSize, currentBtn);
	});
});

function compare(selector, currentBtn) {
	if ( !currentBtn.classList.contains('active') ) {
		selector.forEach(function(item) {
			item.classList.remove('active');
		});
		currentBtn.classList.add('active');
	}
}

document.querySelector(".about__tab").click();
document.querySelector(".about__tab-size").click();

/* Tabs Add*/
const tabsAddBtn = document.querySelectorAll("#tabsAddBtn");

tabsAddBtn.forEach(function(item) {
	item.addEventListener("click", function() {
		let currentBtn = item;

		currentBtn.classList.toggle("active");
	});
});

const filterTabsBtn = document.querySelectorAll("#filterTabsBtn");

filterTabsBtn.forEach(function(item) {
	item.addEventListener("click", function () {
		let currentBtn = item;

		currentBtn.classList.toggle("active");
	})
});


/* Show Text*/
const deliveryShow = document.querySelector('#deliveryShow');
const deliveryText = document.querySelector('#deliveryText');

deliveryShow.addEventListener("click", function() {
	event.preventDefault();
	deliveryText.classList.toggle('show');
});

/* Scroll */
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(onLinkClick);

function onLinkClick(item) {
	item.addEventListener('click', function() {
		event.preventDefault();
		let currentNavLink = item;
		let linkId = currentNavLink.getAttribute("data-section");
		let currentLink = document.querySelector(linkId);

		scrollTo(currentLink);
	});
}

function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop - 80,
		behavior: 'smooth'
	})
}