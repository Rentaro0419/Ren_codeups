
// jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
// });

jQuery(function ($){
	//ナビパートグル
	$('.js-hamburger').on('click', function () {
		if($('.js-hamburger').hasClass('is-open')){
			$('.js-drawer-menu').fadeOut();
			$(this).removeClass('is-open');
		} else {
			$('.js-drawer-menu').fadeIn();
			$(this).addClass('is-open');
		}
	});
})


  // ページトップボタン
  $(function () {
    var pageTop = $(".pagetop");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $("body,html").animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    //フッター手前でストップ
    $(".pagetop").hide();
    $(window).on("scroll", function () {
      var scrollHeight = $(document).height();
      console.log(scrollHeight);
      //読み込んだページの全高さ
      var scrollPosition = $(window).height() + $(window).scrollTop();
      //ウィンドウの高さ + スクロール位置 =現在のスクロール位置
      var footHeight = $(".footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
        //ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
        $(".pagetop").css({
          position: "absolute",
          bottom: footHeight + 20
        });
      } else {
        $(".pagetop").css({
          position: "fixed",
          bottom: "20px"
        });
      }
    });
  });