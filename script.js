$(document).ready(function() {
   
  $.support.cors = true;
  getChannels();
  
});

function getChannels() {
	
	var url = "https://wind-bow.gomix.me/twitch-api/streams/RobotCaleb?callback=?";

		$.ajax({
		url: url,
		type: "GET", 
		contentType: "application/json; charset=utf-8",
		async: false, 
		dataType: "json",
		success: function(data, status, jqXHR) {
			
			appendChannels(data);
		}
	});

		
};

function appendChannels(data) {
	/*
	for (var i=0; i<10; i++){
		$("#all > ul").append("<li><a href=#>Channel " + i + "</a></li>");
		$("#online > ul").append("<li><a href=#>Channel " + i + "</a></li>");
		$("#offline > ul").append("<li><a href=#>Channel " + i + "</a></li>");
	};*/

	
	if (data.stream!== null)
	{
		$("#online > ul").append("<li><a href=" + '"' + data._links.channel.value + '"' + ">" + data._links.channel.value + "</a></li>");
	}
	else
	{
		$("#all > ul").append("<li><a href=" + '"' + data._links.channel.value + '"' + ">" + data._links.channel.value + "</a></li>");
		$("#offline > ul").append("<li><a href=" + '"' + data._links.channel.value + '"' + ">" + data._links.channel.value + "</a></li>");
	}
	
};

