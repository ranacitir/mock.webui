// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(function () {
	$(document).on("click", ".btn", function () {
		var imgSrc = $(this).data("src");

		// sadece bu kart içindeki resmi değiştir
		var card = $(this).closest(".card");
		card.find(".card-img").attr("src", imgSrc);

		// aktif class
		card.find(".btn").removeClass("active");
		$(this).addClass("active");

		const colorMap = {
			"btn-yellow": "Yellow Gold",
			"btn-white": "White Gold",
			"btn-rose": "Rose Gold"
		};

		for (const key in colorMap) {
			if ($(this).hasClass("active") && $(this).hasClass(key)) {
				$("#color").text(colorMap[key]);
				break;
			}
		}
	});
});


function renderStars(el, rating) {
	el.innerHTML = "";
	for (let i = 1; i <= 5; i++) {
		if (rating >= i) {
			el.innerHTML += '<i class="fa-solid fa-star filled"></i>';
		} else if (rating >= i - 0.5) {
			el.innerHTML += '<i class="fa-solid fa-star-half-stroke filled"></i>';
		} else {
			el.innerHTML += '<i class="fa-regular fa-star"></i>';
		}
	}
}

// sayfadaki tüm rating div’lerini bul
document.querySelectorAll(".rating").forEach(el => {
	const rating = parseFloat(el.getAttribute("data-rating"));
	renderStars(el, rating);
});