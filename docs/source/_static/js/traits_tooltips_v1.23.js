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

	$('span.c-dazzled').tooltipster({content: 'Ослеплен (Dazzled): Ваши глаза перенапряжены. Если зрение ваше единственное точное чувство, все существа и объекты "скрыты" для вас.'});
	$('span.c-slowed').tooltipster({content: 'Замедлен (Slowed): У вас меньше действий. Замедление всегда имеет значение. Когда вы восстанавливаете действия в начале хода, уменьшите их количество на значение состояния. Так как замедление начинает свое действие только в начале хода, если вы были замедлены во время своего хода, то не теряете действие мгновенно.'});


	// Признаки оружия

	$('span.w-area').tooltipster({content: 'Область (Area): Это оружие может стрелять только с использованием действия "Огонь по области (Area Fire)".'});
	$('span.w-automatic').tooltipster({content: 'Автоматическое (Automatic): В дополнение к обычной Атаке вы можете стрелять из этого оружия, используя действие "Автоматический огонь (Automatic Fire)".'});


	// Признаки доспехов



	// Остальные признаки действий, существ, предметов и т.п.

	traits_dict = {
		"attack": "Атака (attack): Умение с этим признаком подразумевают атаку. В ваш ход, для каждой атаки после первой, вы получаете штраф множественной атаки.",
		"area": "Область (area): Это оружие может стрелять только с использованием действия \"Огонь по области (Area Fire)\".",
		"automatic": "Автоматическое (Automatic): В дополнение к обычной Атаке вы можете стрелять из этого оружия, используя действие \"Автоматический огонь (Automatic Fire)\".",
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
	$('ul.traits li:textEquals("автоматическое")').tooltipster({content: traits_dict["automatic"]});


	// $('span.t-11111111').tooltipster({content: traits_dict["11111111"]});

});
