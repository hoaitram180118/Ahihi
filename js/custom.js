// JavaScript Document
$(document).ready(function(){
	$("#banner").owlCarousel({
		items: 1,
		autoplay:true,
		smartSpeed: 1000,
		loop:true,
		nav:true,
	})
})
$(document).ready(function(){
	$("#dm").owlCarousel({
		items: 3,
		autoplay:false,
		autoplayTimeout:1000,
		loop:true,
		margin:20,
		nav:true,
	})
})

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();