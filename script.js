var channels = ["ESL_SC2", "OgamingSC2", "cretetion", 
	"freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas",
	"cherryberrymango2"];


$(document).ready(function() {
   
  /*$.support.cors = true;*/
  channels.forEach(function(channel) {
	getChannel(channel);  
  }
  );

});

function getChannel(name) {
	
	var url = "https://wind-bow.gomix.me/twitch-api/streams/"+ name +"?callback=?";

		$.ajax({
		url: url,
		type: "GET", 
		contentType: "application/json; charset=utf-8",
		async: false, 
		dataType: "json",
		success: function(data, status, jqXHR) {
			
			appendChannels(data, name);
		}
	});

		
};

function appendChannels(data, name) {
	/*
	for (var i=0; i<10; i++){
		$("#all > ul").append("<li><a href=#>Channel " + i + "</a></li>");
		$("#online > ul").append("<li><a href=#>Channel " + i + "</a></li>");
		$("#offline > ul").append("<li><a href=#>Channel " + i + "</a></li>");
	};*/

	
	if (data.stream!== null)
	{
		$("#online > ul").append("<li><a href=" + '"' + data.stream.channel.url + '"' + ">" + data.stream.channel.display_name  + "</a></li>");
		$("#all > ul").append("<li><a href=" + '"' + data.stream.channel.url + '"' + ">" + data.stream.channel.display_name + "<span class='stream-details'>" + data.stream.channel.game +  "</span>" + "</a></li>");
	}
	else
	{
		$("#all > ul").append("<li><a href=https://www.twitch.tv/" + name + ">" + name  + "<span class='stream-details'>Offline</span>" + "</a></li>");
		$("#offline > ul").append("<li><a href=https://www.twitch.tv/" + name + ">" + name + "</a></li>");
	}
	
};

