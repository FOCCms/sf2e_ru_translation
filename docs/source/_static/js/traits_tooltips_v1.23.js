$(document).ready( function() {
	$.tooltipster.setDefaults({
			content: 'Признак',
			side: 'top',
			trigger: 'click',
			maxWidth: '600',
	});

	$.expr[':'].textEquals = $.expr[':'].textEquals || $.expr.createPseudo(function(arg) {
	    return function( elem ) {
	        return $(elem).text().match("^" + arg + "$");
	    };
	});

	// Мировоззрения


	// Состояния


	// Признаки оружия

	$('span.w-area').tooltipster({content: 'Область (Area): Это оружие может стрелять только с использованием действия "Огонь по области (Area Fire)".'});


	// Признаки доспехов



	// Остальные признаки действий, существ, предметов и т.п.

	traits_dict = {
		"attack": "Атака (attack): Умение с этим признаком подразумевают атаку. В ваш ход, для каждой атаки после первой, вы получаете штраф множественной атаки.",
		"area": "Область (area): Это оружие может стрелять только с использованием действия \"Огонь по области (Area Fire)\"",
		// "11111111": "22222222 (11111111): 33333333",
	}

	// Редкость

	// Размер


	// Признаки... без какого-либо описания, но использующиеся

	// $('ul.traits li:textEquals("аура")').tooltipster({content: traits_dict["aura"]});
	// $('span.t-aura').tooltipster({content: traits_dict["aura"]});

	// Оружие

	// $('ul.traits li:textEquals("22222222")').tooltipster({content: traits_dict["11111111"]});

	$('ul.traits li:textEquals("атака")').tooltipster({content: traits_dict["attack"]});
	$('ul.traits li:textEquals("область")').tooltipster({content: traits_dict["area"]});


	// $('span.t-11111111').tooltipster({content: traits_dict["11111111"]});

});
