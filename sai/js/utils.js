var draggable = '';
var draggableId = '';
var count = 0;

function changeWidth(minwidth, maxwidth){
    $('#containerBody').css('min-width', minwidth);
    $('#containerBody').css('max-width', maxwidth);
}
function initialize(){
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	$('#sideNav').height(windowHeight);
	$('#containerBody').css('min-height',windowHeight-64);
	$(window).resize(function(){
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		$('#sideNav').height(windowHeight);
		$('#sideNav').css('min-height',windowHeight-64);
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
	$('<div id="temp"></div>').insertAfter(ev.target);
	draggable = ev.target;
	draggableId = ev.target.id;
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	$(document.getElementById(data)).appendTo('#containerBody');
	$(draggable).clone().insertAfter('#temp');
	$('#containerBody #'+ draggableId).attr('id' , 'template-'+count);
	toggleSideBar();
	var windowHeight = $(window).height();
	$('#containerBody .templates').height(windowHeight-64);
	$('#temp').remove();
	count++;
	$('#containerBody .templates').click(function(){
		$('#containerBody .templates').removeClass('active');
		$(this).addClass('active');
		$(this).find('.templateEditIcons .fa-trash-o').attr('onclick', 'javascript:deleteTemplate("'+ $(this).attr("id") +'");');
		$(this).find('.templateEditIcons').removeClass('hide');
	});
}

function deleteTemplate(id){
	$('#'+id).remove();
}