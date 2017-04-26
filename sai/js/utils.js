function changeWidth(minwidth, maxwidth){
    $('#containerBody').css('min-width', minwidth);
    $('#containerBody').css('max-width', maxwidth);
}
function initialize(){
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	$('#sideNav').height(windowHeight);
	$('#containerBody').css('min-height',windowHeight);
	$(window).resize(function(){
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		$('#sideNav').height(windowHeight);
		$('#sideNav').css('min-height',windowHeight);
	});
}
function toggleSideBar(){
	$('#sideNav, #addTemplate').toggleClass('active');
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
	toggleSideBar();
	var windowHeight = $(window).height();
	$('.templates').height(windowHeight);
}