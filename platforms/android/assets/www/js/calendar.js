$.getJSON('http://enx3s.com/boscal/cal/?type=json', function(data) {
	$("#loader").hide();
	$.each(data[0], function(key, day) {
		$("#cal_list").append('<li data-role="list-divider"><h2>' + key + "</h2></li>");
		$.each(day["en"], function(key2, event) {
			if(event.split(" ")[0] != "")
			{
				$("#cal_list").append('<li><p>' + event + "</i></p></li>");
			}
		});
	});
	
	$("#cal_list").listview('refresh');
});