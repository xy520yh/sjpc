;(function($){
	$.extend({
		inputStyle:function(){
			function check(el,cl){
				$(el).each(function(){
					$(this).parent('span').removeClass(cl);
					 $(this).parent('span').next('strong').removeClass('red');

					var checked = $(this).prop('checked');
					if(checked){
						$(this).parent('span').addClass(cl);
						 $(this).parent('span').next('strong').addClass('red');
						
					}
				})
			}	
			$('input[type="radio"][value="and"]').parent('span').addClass('radio_bg_check');
			console.log($('input[type="radio"][value="and"]').val());
			$('input[type="radio"][value="and"]').parent('span').next('strong').addClass('red');
			$('input[type="radio"]').on('click',function(){
				check('input[type="radio"]','radio_bg_check');
				var index1 = $('input[type="radio"]').index( $(this) );
				console.log($(this).val());
				
				
			})
			
		}
		
	})

})(jQuery)

//调用
$(function(){
	$.inputStyle();
})