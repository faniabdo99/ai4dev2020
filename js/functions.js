//PAGE LOADER
$(window).on("load", function() {
  "use strict";
  $(".loader").fadeOut(800);
  $('.side-menu').removeClass('opacity-0');
});
$($ => {
  "use strict";
  let $window = $(window);
  let body = $("body");
  let $root = $("html, body");
  $('[data-toggle="tooltip"]').tooltip();
  //contact us
  /*rating stars*/
  let fadeInStar = () => {
    let starItem = $('#rattingIcon .fa-star.fas');
    starItem.addClass('scale-star');
    setTimeout(function() {
      starItem.removeClass('scale-star');
    }, 180);
  }
  let ratingText = $('#ratingText');
  let fadeInStarText = n => {
    ratingText.addClass('scale-price');
    setTimeout(function() {
      ratingText.removeClass('scale-price');
      switch (n) {
        case 0:
          ratingText.text('Poor!');
          break;
        case 1:
          ratingText.text('Average!');
          break;
        case 2:
          ratingText.text('Good!');
          break;
        case 3:
          ratingText.text('Very Good!');
          break;
        case 4:
          ratingText.text('Excellent!');
      }
    }, 180);
  }

  $("#rattingIcon .fa-star").on('click', function() {
    let iconIndex = $(this).index();
    $(this).addClass("fas").removeClass("far");
    $(this).prevAll().addClass("fas").removeClass("far");
    $(this).nextAll().addClass("far").removeClass("fas");
    fadeInStar();
    fadeInStarText(iconIndex);
  });


  /* ----- Back to Top ----- */
  $(body).append('<a href="#" class="back-top"><i class="fa fa-angle-up"></i></a>');
  let amountScrolled = 700;
  let backBtn = $("a.back-top");
  $window.on("scroll", function() {
    if ($window.scrollTop() > amountScrolled) {
      backBtn.addClass("back-top-visible");
    } else {
      backBtn.removeClass("back-top-visible");
    }
  });
  backBtn.on("click", function() {
    $root.animate({
      scrollTop: 0
    }, 700);
    return false;
  });

  /* ------- Smooth scroll ------- */
  $("a.pagescroll").on("click", function(event) {
    event.preventDefault();
    let action = $(this.hash).offset().top;
    if ($(this).hasClass('scrollupto')) {
      action -= 45;
    }
    $("html,body").animate({
      scrollTop: action
    }, 1200);
  });
  /* ------- navbar menu Position dynamically ------- */
  $(".dropdown").on("mouseenter", function() {
    let $elem = $(this).find('.dropdown-menu'),
      left = $elem.offset().left,
      width = $elem.width(),
      docW = $(window).width();
    if ((left + width) > docW) {
      $elem.addClass("right-show");
    } else if ((left + (width * 2)) < docW) {
      $elem.removeClass("right-show");
    }
  });

  /*------ Sticky MENU Fixed ------*/
  let headerHeight = $("header").outerHeight();
  let navbar = $("nav.navbar");
  if (navbar.not('.fixed-bottom').hasClass("static-nav")) {
    $window.scroll(function() {
      let $scroll = $window.scrollTop();
      let $navbar = $(".static-nav");
      let nextSection = $(".section-nav-smooth");
      if ($scroll > 250) {
        $navbar.addClass("fixedmenu");
        nextSection.css("margin-top", headerHeight);
      } else {
        $navbar.removeClass("fixedmenu");
        nextSection.css("margin-top", 0);
      }
      if ($scroll > 125) {
        $('.header-with-topbar nav').addClass('mt-0');
      } else {
        $('.header-with-topbar nav').removeClass('mt-0');
      }
    });
    $(function() {
      if ($window.scrollTop() >= $(window).height()) {
        $(".static-nav").addClass('fixedmenu');
      }
    })
  }
  /*Menu Onclick*/
  let sideMenuToggle = $("#sidemenu_toggle");
  let sideMenu = $(".side-menu");
  if (sideMenuToggle.length) {
    sideMenuToggle.on("click", function() {
      $("body").addClass("overflow-hidden");
      sideMenu.addClass("side-menu-active");
      $(function() {
        setTimeout(function() {
          $("#close_side_menu").fadeIn(300);
        }, 300);
      });
    });
    $("#close_side_menu , #btn_sideNavClose , .side-nav .nav-link.pagescroll").on("click", function() {
      $("body").removeClass("overflow-hidden");
      sideMenu.removeClass("side-menu-active");
      $("#close_side_menu").fadeOut(200);
      $(() => {
        setTimeout(() => {
          $('.sideNavPages').removeClass('show');
          $('.fas').removeClass('rotate-180');
        }, 400);
      });
    });
    $(document).keyup(e => {
      if (e.keyCode === 27) { // escape key maps to keycode `27`
        if (sideMenu.hasClass("side-menu-active")) {
          $("body").removeClass("overflow-hidden");
          sideMenu.removeClass("side-menu-active");
          $("#close_side_menu").fadeOut(200);
          $tooltip.tooltipster('close');
          $(() => {
            setTimeout(() => {
              $('.sideNavPages').removeClass('show');
              $('.fas').removeClass('rotate-180');
            }, 400);
          });
        }
      }
    });
  }

  /*
   * Side menu collapse opener
   * */
  $(".collapsePagesSideMenu").on('click', function() {
    $(this).children().toggleClass("rotate-180");
  });
  /* =====================================
   Parallax And responsive plugins initialize
    ====================================== */
  let $tooltip = $('.tooltip');
  $(() => {
    $tooltip.tooltipster({
      plugins: ['follower'],
      anchor: 'bottom-right',
      offset: [0, 0],
      animation: 'fade',
      content: 'Click Here To Close or Press ESC!',
      delay: 20,
      theme: 'tooltipster-light',
      repositionOnScroll: true,
    });
  });
  /*Wow Animations*/
  if ($(".wow").length && $(window).outerWidth() >= 567) {
    let wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true
    });
    wow.init();
  }
  if ($(window).width() > 992) {
    $(".parallax").parallaxie({
      //speed value btw (-1 to 1)
      speed: 0.55,
      offset: 0,
    });
    $(".parallax.parallax-slow").parallaxie({
      speed: 0.31,
    });
  } else if ($(window).width() < 576) {
    $('#pagepiling #submit_btn').on('click', function() {
      $('#pagepiling #result').remove();
    });
    $('#pagepiling .para-opacity').addClass('opacity-5');
  } else {
    $('#pagepiling .para-opacity').removeClass('opacity-5');
  }
  $(window).resize(function() {
    if ($(window).width() < 576) {
      $('#pagepiling .para-opacity').addClass('opacity-5');
    } else {
      $('#pagepiling .para-opacity').removeClass('opacity-5');
    }
  });

  let fadeInPrice = (thisItem, priceText) => {
    let pricingItem = $('.pricing-price');
    pricingItem.addClass('scale-price');
    setTimeout(function() {
      thisItem.text(priceText);
      pricingItem.removeClass('scale-price');
    }, 200);
  }

  $('.pricing-item').on('mouseenter', function() {
    $('.pricing-item').removeClass('active');
    $(this).addClass('active');
  }).on('mouseleave', function() {
    $('.pricing-item').removeClass('active');
    $('.pricing-item.selected').addClass('active');
  });
  //shop detail dual carousel
  let syncCont = $("#shop-dual-carousel");
  let syncCarousel = $("#syncCarousel.owl-carousel");
  if (syncCont) {
    syncCont.append('<div class="owl-carousel carousel-shop-detail-inner owl-theme" id="syncChild"></div>');
    let arrTotal = syncCarousel.find('.item').length - 1;
    let item = '';
    let syncChild = $("#syncChild");
    for (let i = 0; i <= arrTotal; i++) {
      item = syncCarousel.find('.item').eq(i).find('img').attr('src');
      syncChild.append('<!-- Item ' + (i + 1) + '--><div class="item"><img src="' + item + '" alt=""></div>');
    }
  }


  let syncChild = $("#syncChild.owl-carousel");

  syncCarousel.owlCarousel({
    singleItem: true,
    items: 1,
    dots: false,
    slideSpeed: 1000,
    mouseDrag: false,
    nav: true,
    pagination: false,
    afterAction: syncPosition(),
    responsiveRefreshRate: 200,
  });

  syncChild.owlCarousel({
    items: 4,
    pagination: false,
    margin: 0,
    dots: false,
    afterAction: syncPosition(),
  });

  function syncPosition() {
    setTimeout(function() {
      syncChild.find(".owl-item").first().addClass("synced");
    }, 300);
  }
  /* ----------- Counters ---------- */
  $(".counters").appear(function() {
    $(".count_nums").countTo();
  });
  /* =====================================
          Coming Soon Count Down
  ====================================== */
  let countDown = $(".count_down");
  if (countDown.length) {
    countDown.downCount({
      // month / day / Year
      date: '11/28/2020 14:00:00',
      offset: +10
    });
  }

  //Goals Flip Cards
  $('.goal-flip-card').hover(function(){
    $(this).find('.extra-content').fadeIn();
  },function(){
    $(this).find('.extra-content').fadeOut();
  });
  //Video Popup
  $('.video-toggler').click(function(){
    //Plug the element in
    $('body').append(`
      <div class="video-popup justify-content-center align-items-center">
          <span class="close-icon"><i class="fas fa-times"></i></span>
          <div>
            <h2 class="text-white text-center mb-4">Watch Our Video</h2>
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAI4Dev2020%2Fvideos%2F218041739773928%2F&show_text=false&width=560" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      `);
    $('body').css('overflow-y' , 'hidden');
  });
  $(document).on( 'click', '.close-icon , .video-popup', function(e){
    $('.video-popup').remove();
    $('body').css('overflow-y' , 'scroll');
  });
  //Highlight the current section in navbar
  var AllNavLinks = $('.desktop-nav-link');
  AllNavLinks.each(function (index) {
    var SingleSection = $('.innav-section'+$(this).attr('href'));
    var CurrentNavItem = $(this);
    //Highlight the current section
    $(window).scroll(function () {
      var ItemOffset = SingleSection.offset().top,
        ItemHeight = SingleSection.outerHeight(),
        WindowHieght = $(window).height(),
        WindowScroll = $(this).scrollTop();
      if (WindowScroll > ((ItemOffset + (ItemHeight/1.5)) - WindowHieght)) {
        $('.desktop-nav-link').removeClass('active');
        CurrentNavItem.addClass('active');
      } else {
        CurrentNavItem.removeClass('active');
      }
    });
    //Plug the Video in Based on Screen Size
    if($(window).width() > 992){
      $('#background-video').html(`
        <video autoplay muted loop preload="auto" class="d-lg-block d-none lazy">
          <source src="video/nile_video_desktop.mp4" type="video/mp4">
        </video>
      `);
    }else{
      $('#background-video').html(`
        <video autoplay muted loop preload="auto" class="d-lg-none d-block lazy">
          <source src="video/nile_video.mp4" type="video/mp4">
        </video>
      `);
    }
  });
  //end of js

});
$("#testimonial-slider").owlCarousel({
       items: 5,
       autoplay: true,
       autoplayHoverPause: false,
       mouseDrag: false,
       loop: true,
       margin: 30,
       autoplayTimeout:3500,
       animateIn: "fadeIn",
       animateOut: "fadeOut",
       dots: false,
       nav: true,
       navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
       responsive: {
           980: {
               items: 1,
           },
           600: {
               items: 1,
           },
           320: {
               items: 1,
           },
       }
   });
