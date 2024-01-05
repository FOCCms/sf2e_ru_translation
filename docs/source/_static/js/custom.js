$(document).ready( function() {
	$('section > h1 + ul, \
		section > h2 + ul, \
		section > h3 + ul, \
		section > h4 + ul, \
		section > h5 + ul, \
		section > h6 + ul').addClass('traits');

    // Добавляет иконкам действий заголовок всплывающий при наведение.
    // Невозможно реализовать в Sphinx, так как изображения не имеют нужного атрибута.
    $("img.action, img.game-icon").each(function() {
    	$( this ).attr("title", $( this ).attr("alt"));
    });
});
