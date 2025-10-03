// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.




$(function () {
	$(document).on("click", ".color-btn", function () {
		var imgSrc = $(this).data("src");

		// sadece bu kart içindeki resmi değiştir
		var card = $(this).closest(".card");
		card.find(".card-img").attr("src", imgSrc);

		// aktif class
		card.find(".color-btn").removeClass("active");
		$(this).addClass("active");
	});
});


