
var day = "";
function loadCal()
{
	$.getJSON('http://enx3s.com/boscal/cal/?type=json&noclean', function(data) {
		$("#loader").hide();
		var firstRun = true;
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
			$("#" + day_key).append("<span id='day' class='ui-li-count'>" + label + "</span>");
			if(firstRun)
			{
				day = label;
				$("#day_text").html(day);
				firstRun = false;
			}
		});
		$("#cal_list").listview('refresh');
	});
}