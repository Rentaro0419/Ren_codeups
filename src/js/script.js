
// loading
$(window).on('load',function(){
  $(".loading").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $(".loading__logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

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

//swiper メインビュー
var swiper1 = new Swiper(".js-main-swiper", {
  loop: true,
  effect: "fade",
  speed: 2000,
  allowTouchMove: false,
  autoplay: {
    delay: 2000,
  },
});

//swiper
const swiper = new Swiper('.js-campaign-swiper', {
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.02,
      spaceBetween: 18,
    },
    375: {
      slidesPerView: 1.25,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2.4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2.7,
      spaceBetween: 35,
    },
    1000: {
      slidesPerView: 3.2,
      spaceBetween: 38,
    },
    1280: {
      slidesPerView: 3.4,
      spaceBetween: 40,
    },
    1600: {
      slidesPerView: 4.2,
      spaceBetween: 40,
    },
  }
});


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