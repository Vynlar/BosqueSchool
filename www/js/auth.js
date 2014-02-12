$(document).ready(function() 
    console.log("hello");
	document.addEventListener("deviceready", startApp, false);
});

function startApp()
{
    window.open('http://www.google.com', '_blank', 'location=yes');
}