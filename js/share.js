$(function(){
	$('#header').html(`<div id="logo" ><a href="#"><img src="/img/logo.png"  alt="嘉創株式会社"></a></div>
            <nav id="menu">
                <ul>
                    <li><a href="/">Aioticat</a></li>
                    <li><a href="/sensor_partner/">パートナー</a></li>
                    <li><a href="/consulting/">コンサルティング</a></li>
                    <li><a href="/case/">導入事例</a></li>
                    <li><a href="/device/">IOT デバイス</a></li>
                    <li><a href="/news/">ニュース</a></li>
                    <li><a href="/contact/" class="askBtn">問い合わせ</a></li>
                </ul>
            </nav>

            <nav id="nav">
                <div class="nav">
                    <ul>
                        <li><a href="/">TOP </a></li>
                        <li><a href="/">Aiotica </a>
                            <ul>
                                <li><a href="/">Aiotica とは</a></li>
                            </ul>
                            <ul>
                                <li><a href="/assistant/">Aiotica　Assistant とは</a></li>
                            </ul>
                            <ul>
                            	<div style="margin-top: 20px;margin-left: 10px">技術</div>
                                <li style="margin-top: 20px;margin-left: 10px"><a href="/aioticat/">Platform</a></li>
                                <li style="margin-top: 20px;margin-left: 10px"><a href="/gateway/">Gateway</a></li>
                                <li style="margin-top: 20px;margin-left: 10px"><a href="/aws/">AWS</a></li>
							</ul>
                        </li>
                        <li><a href="/sensor_partner/">パートナー</a>
                            <ul>
                                <li><a href="/sensor_partner/">センサーパートナープログラム</a></li>
                            </ul>
                            <ul>
                                <li><a href="/partner/">パートナープログラム</a></li>
                            </ul>
                        </li>
                        <li><a href="/consulting/">コンサルティング</a></li>
                        <li><a href="/case/">導入事例</a>
                            <ul>
                                <li><a href="/case/">導入事例</a></li>
                            </ul>
                            <ul>
                                <li><a href="/service/">サービス</a></li>
                            </ul>
                        </li>
                        <li><a href="/device/">IOT デバイス</a></li>
                        <li><a href="/news/">ニュース</a></li>
                        <li><a href="/contact/">お問合せ</a></li>
                    </ul>
                    <ul class="sub">
                        <li><a href="/policy/">プライバシーポリシー</a></li>
                    </ul>
                </div>
            </nav>
            <div id="open">
                <div><span></span><span></span><span></span></div><i>MENU</i>
            </div>`)
});
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
		// $('html, body').animate({scrollTop:position - 100}, 500, 'swing');
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