$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
            $('.airplane').addClass('airplane-animate');
			$("#form").trigger("reset");
		});
		return false;
	});
	
});