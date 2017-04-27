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

function previewCode(){
	var opened = window.open("");
	opened.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="generator" content="Mobirise v3.12.1, mobirise.com"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content=""><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&amp;subset=latin"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700"><link href="https://fonts.googleapis.com/css?family=Rouge+Script|Satisfy" rel="stylesheet"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"><link rel="stylesheet" href="assets/bootstrap-material-design-font/css/material.css"><link rel="stylesheet" href="assets/tether/tether.min.css"><link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"><link rel="stylesheet" href="assets/dropdown/css/style.css"><link rel="stylesheet" href="assets/animate.css/animate.min.css"><link rel="stylesheet" href="assets/theme/css/style.css"><link rel="stylesheet" href="font-awesome/css/font-awesome.min.css"><link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css"><link rel="stylesheet" href="css/style.css" type="text/css"></head>');
	opened.document.write('<body>'+ $('#containerBody').html());
	opened.document.write('<section class="engine"><a rel="external" href="https://mobirise.com">Mobirise Website Builder</a></section><script src="assets/web/assets/jquery/jquery.min.js"></script><script src="js/utils.js"></script><script src="assets/tether/tether.min.js"></script><script src="assets/bootstrap/js/bootstrap.min.js"></script><script src="assets/smooth-scroll/smooth-scroll.js"></script><script src="assets/dropdown/js/script.min.js"></script><script src="assets/touch-swipe/jquery.touch-swipe.min.js"></script><script src="assets/viewport-checker/jquery.viewportchecker.js"></script><script src="assets/theme/js/script.js"></script><input name="animation" type="hidden">');
	opened.document.write('</body></html>');
}