$(document).ready(function () {
  $(".faq-list .item-header").click(function () {
    $(this).parent().toggleClass("opened");
  });

  const appSlider = $(".app-slider");

  $(".selector").select2();

  $(".dest-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev'><img src='./images/slick-prev-arrow.svg'/></button>",
    nextArrow:
      "<button type='button' class='slick-next'><img src='./images/slick-next-arrow.svg'/></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 411,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".app-form").validate({
    rules: {
      applying_for: "required",
      email: {
        required: true,
        email: true,
      },
    },
  });

  $(".btn-next").click(() => {
    if (!$(".app-form").valid()) {
      appSlider.slick("refresh");
      return false;
    }
    appSlider.slick("slickNext");
    let nextSlideIndex = $(".slick-active").attr("data-slick-index");
    $(".progress .step:eq(" + nextSlideIndex + ")").addClass("active");
    $(".btn-prev").css("display", "block");

    if (nextSlideIndex === "4") {
      $(".btn-next").html("Pay Now");
    }

    if (nextSlideIndex === "5") {
      $(".btn-next").css("display", "none");
      $(".btn-submit").css("display", "block");
    }
  });

  $(".btn-prev").click(() => {
    appSlider.slick("slickPrev");
    let prevSlideIndex = $(".slick-active").attr("data-slick-index");
    $(".progress .step:eq(" + (Number(prevSlideIndex) + 1) + ")").removeClass(
      "active"
    );

    if (prevSlideIndex === "0") {
      $(".btn-prev").css("display", "none");
    }

    if (prevSlideIndex < "4") {
      $(".btn-next").css("display", "block").html("Continue");
    }

    if (prevSlideIndex === "4") {
      $(".btn-next").html("Pay Now");
    }

    if (prevSlideIndex !== "5") {
      $(".btn-submit").css("display", "none");
      $(".btn-next").css("display", "block");
    }
  });

  appSlider.slick({
    slidesToShow: 1,
    infinite: false,
    adaptiveHeight: true,
    arrows: false,
    draggable: false,
  });
});
