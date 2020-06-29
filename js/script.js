$(function () {
  $(".slider").slick({
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 800,
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $(".btn_up").fadeIn();
    } else {
      $(".btn_up").fadeOut();
    }
  });
  $(".btn_up").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 700);
  });
});
