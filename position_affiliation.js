//For reference https://www.drupal.org/node/756722#behaviors

(function($) {
	Drupal.behaviors.position_affiliation = {
		attach: function (context, settings) {
			$('.end_date_show', context).on('click', function(){
				if( jQuery(this).is(':checked')) {
					jQuery(this).parent().parent().find(".end_date").parent().show();
				} else {
					jQuery(this).parent().parent().find(".end_date").parent().hide();
				}
			});
			$('.end_date_show', context).each(function(){
				if( jQuery(this).is(':checked')) {
					jQuery(this).parent().parent().find(".end_date").parent().show();
				} else {
					jQuery(this).parent().parent().find(".end_date").parent().hide();
				}
			})	
		}
	};
}) (jQuery);