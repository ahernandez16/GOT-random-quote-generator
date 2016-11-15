$(document).ready(function() {
	$("#newQuote").on("click", function(){
		$.getJSON("https://got-quotes.herokuapp.com/quotes.json", function(data){
			var html = "";
				html += "<blockquote class='got-quote'>";
				html += "<p>" + data.quote + "</p>";
				html += "<footer><cite title='got-char'>" + data.character + "</cite></footer>";
				html += "</blockquote>";
			$(".quote").html(html);
		});
	});
}); 