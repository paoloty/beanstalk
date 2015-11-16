$(document).ready( function () {
	
	$('.form-wrapper.toggle a').on('click', function (e) {
		e.preventDefault();
		
		if ( !$(this).attr('class').match(/active/) ) {
			$(this).parent().find('a').removeClass('active');

			var _show = $.trim($(this).attr('class'));
			var _hide = 'pack';

			if (_show == 'pack') {
				_hide = 'subscription';
			}

			$(this).addClass('active');

			console.log(_show + ' ' + _hide);

			$('div.' + _show).show();
			$('div.' + _hide).hide();
			
		}
	});

	$(window).on('scroll', function () {

		var _hero = $('section.one.hero').outerHeight() - $('nav').outerHeight();
		console.log(_hero);

		if ( $(document).scrollTop() > _hero ) {
			$('nav').addClass('small');
		} else {
			$('nav').removeClass('small');
		}
	});

});