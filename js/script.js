$(function () {
  $(".slider").slick({
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
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
