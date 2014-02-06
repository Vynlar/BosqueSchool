var day = "";
$.getJSON('http://enx3s.com/boscal/cal/?type=json', function(data) {
	$("#loader").hide();
	$.each(data[0], function(key, day) {
		var find = '/';
		var re = new RegExp(find, 'g');
		var day_key = key.replace(re, '');
		var isSchoolDay = false;
		var label = "No School";
		$("#cal_list").append('<li id="' + day_key + '" data-role="list-divider"><h2>' + key + "</h2>");
		$.each(day["en"], function(key2, event) {
			var split = event.split(" ");
			if(split[0] == "Day")
			{
				isSchoolDay = true;
				label = event;
			}
			else
			{
				$("#cal_list").append('<li><p>' + event + "</i></p></li>");
			}
		});
		$("#" + day_key).append("<span class='ui-li-count'>" + label + "</span>");
	});
	$("#cal_list").listview('refresh');
});

function getDay(id)
{
	alert("testing");
}