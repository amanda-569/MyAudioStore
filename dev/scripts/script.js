// Write your JavaScript here...

$(document).ready(function () {
  //banner logics
  $("#banner").slick({
    //add all the desire setting here
    autoplay: true,
    adaptiveHeight: true,
    dots: true,
    fade: true,
    speed: 500,
    cssEase: "linear",
  });
  $(".slick-prev").html('<i class="fa-solid fa-angle-left"></i>');
  $(".slick-next").html('<i class="fa-solid fa-angle-right"></i>');

  //relocate bestseller product text when viewport > 450px
  $(window).on("load resize", () => {
    const viewportWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth
    );
    if (viewportWidth > 500) {
      if ($(".bestseller").prev().is("p")) {
        $(".bestseller").each(function () {
          $(this).prev().insertAfter($(this).find("img"));
        });
      }
    } else {
      if ($(".bestseller").children("p")) {
        $(".bestseller").each(function () {
          $(this).children("p").insertBefore($(this));
        });
      }
    }
  });

  $(".slicking").slick({
    slidesToShow: 5,
  });

  let unslicked = "";
  let unslickedShop = "";

  const viewportWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth
  );
  unslicked = $(".news-slideshow")
    .clone()
    .addClass("unslick")
    .removeClass("news-slideshow");

  unslickedShop = $(".shop-by-slideshow")
    .clone()
    .addClass("unslick-shop")
    .removeClass("shop-by-slideshow");

  // duplicating the in-the-news using jquery to avoid duplicate HTML
  unslicked.insertAfter(".news-slideshow");
  unslickedShop.insertAfter(".shop-by-slideshow");
  if (viewportWidth > 499) {
    $(".news-slideshow").addClass("active-slideshow");
    $(".shop-by-slideshow").addClass("active-slideshow-shop");
    $(".active-slideshow").slick({
      autoplay: false,
      // variableWidth: true,
      dots: false,
      slidesToShow: 5,
      prevArrow:
        '<div class="slick-prev"><i class="fa-solid fa-angle-left"></i></div>',
      nextArrow:
        '<div class="slick-next"><i class="fa-solid fa-angle-right"></i></div>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
    $(".active-slideshow-shop").slick({
      autoplay: false,
      // variableWidth: true,
      dots: false,
      slidesToShow: 5,
      prevArrow:
        '<div class="slick-prev"><i class="fa-solid fa-angle-left"></i></div>',
      nextArrow:
        '<div class="slick-next"><i class="fa-solid fa-angle-right"></i></div>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  } else if (viewportWidth < 500) {
    $(".news-slideshow").hide();
    $(".shop-by-slideshow").hide();
  }

  $(".menu").hide();

  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
    $(".menu").slideToggle("slow", function () {});
  });
});
