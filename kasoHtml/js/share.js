window.onpageshow = function(event){
    if(event.persisted){
        window.location.reload();
    }
};


const urlHash = location.hash;


$(window).on('load', function(){
	$('body').addClass('start');
});


$(window).on('load resize', function(){
	Waypoint.refreshAll();
});


$(function(){
	$(document).on('touchend click', function(event){
		let e = $(event.target);
		if(e.closest('#open').length){
			event.preventDefault();
			if($('#header').hasClass('open')){
				$('#header').removeClass('open');
			}else{
				$('#header').addClass('open');
			}
		}
    });
	
	
	$('a[href^="#"]').on('click', function(){
		$('#header').removeClass('open');
		var href= $(this).attr('href');
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('html, body').animate({scrollTop:position - 100}, 500, 'swing');
		return false;
	});
    
    
    $('#nav li a').filter(function(){
        return location.href.match($(this).prop('href'));
    }).parents('li').addClass('on');
    
    
    if(urlHash){
        $('body,html').stop().scrollTop(0);
        setTimeout(function(){
            let target = $(urlHash);
            if(target.length){
                $('body,html').stop().animate({scrollTop: target.offset().top - 80}, 500, 'swing');
            }
        }, 100);
    }
	

	$('#main article header, #main article section > *:not(.nofade)').addClass('animated fast');
	$('#main article:first-of-type header:first-of-type, #main article:first-of-type section:first-of-type > *:first-of-type').removeClass('animated fast');
	$('#main article header, #main article section > *:not(.nofade)').waypoint(function(direction){
		if(direction === 'down'){
			$(this.element).addClass('fadeInUp');
		}
	},{offset: '90%'});
	
});