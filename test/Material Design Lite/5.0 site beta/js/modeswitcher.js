(function($) {
		var $iframe = $('iframe');
		var $switch = $('.switch-size');

		$switch.on('click', function() {
				var $this = $(this);

				if ($this.hasClass('switch-active')) {
						return;
				} else {
						$switch.removeClass('switch-active');
						$(this).addClass('switch-active');

						// id
						var $id = $this.attr('id');
						var $class;
						console.log($id);
					
						switch ($id) {
								case "switch-tablet":
										$class = "tablet-size";
										break;
								case "switch-mobile":
										$class = "mobile-size";
										break;
								default:
										$class = "desktop-size";
						}
						
						$iframe.attr('id', $class);
				}

		});

})(jQuery);
