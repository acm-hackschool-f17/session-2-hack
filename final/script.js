$(document).ready(function() {
	$("table tr").on("click", function(event){
		let row = $(event.currentTarget);
		let fruit = row.find(".fruit").first().text();
		$(".popup .title").text(fruit);
		$(".popup").removeClass("inactive");
		$(".popup").addClass("active");
		$(".container").css("opacity", "0.2");
	});

	$("button").on("click", function(event) {
		$(".popup").addClass("inactive");
		$(".popup").removeClass("active");
		$(".container").css("opacity", "1");
	});
})