$(document).ready(function() {
	$.getJSON("https://got-quotes.herokuapp.com/quotes.json", function(data){
			var html = "";
			var tweet = "";
				html += "<blockquote class='got-quote'>";
				html += "<p>&ldquo;" + data.quote + "&rdquo;</p>";
				html += "<footer><cite title='got-char'>" + data.character + "</cite></footer>";
				html += "</blockquote>";

				tweet += "<a class='tweet-link btn btn-primary' href='https://twitter.com/intent/tweet?";
				tweet += "text=\"" + encodeURIComponent(data.quote).replace(/'/g, "%27") + "\"+—" + encodeURIComponent(data.character) + "'>";
				tweet += "<i class='fa fa-twitter fa-lg'></i> Tweet</a>";
			$(".quote").html(html);
			$(".tweet-button").html(tweet);
		});
	
	$("#newQuote").on("click", function(){
		$.getJSON("https://got-quotes.herokuapp.com/quotes.json", function(data){
			var html = "";
			var tweet = "";
				html += "<blockquote class='got-quote'>";
				html += "<p>&ldquo;" + data.quote + "&rdquo;</p>";
				html += "<footer><cite title='got-char'>" + data.character + "</cite></footer>";
				html += "</blockquote>";

				tweet += "<a class='tweet-link btn btn-primary' href='https://twitter.com/intent/tweet?";
				tweet += "text=\"" + encodeURIComponent(data.quote).replace(/'/g, "%27") + "\"+—" + encodeURIComponent(data.character) + "'>";
				tweet += "<i class='fa fa-twitter fa-lg'></i> Tweet</a>";
			$(".quote").html(html);
			$(".tweet-button").html(tweet);
		});
	});
}); 