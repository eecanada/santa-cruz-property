
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
  
    };
  
    // Shrink the navbar 
    navbarShrink();
  
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
  
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };
  
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
  
    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
  
  });
  
  
  
  //////////////////VIDEO BACKGROUND/////////////////////////
  
  var timeoutId;
  var $videoBgAspect = $(".videobg-aspect");
  var $videoBgWidth = $(".videobg-width");
  var videoAspect = $videoBgAspect.outerHeight() / $videoBgAspect.outerWidth();
  
  function videobgEnlarge() {
    console.log('resize');
    windowAspect = ($(window).height() / $(window).width());
    if (windowAspect > videoAspect) {
      $videoBgWidth.width((windowAspect / videoAspect) * 100 + '%');
    } else {
      $videoBgWidth.width(100 + "%")
    }
  }
  
  $(window).resize(function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(videobgEnlarge, 100);
  });
  
  $(function() {
    videobgEnlarge();
  });
  
  
  
  /////////////////////////////HOME-VIDEO/////////////////////////////////
  
  $(".vpop").on('click', function(e) {
    e.preventDefault();
    $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();
    
    var srchref='',autoplay='',id=$(this).data('id');
    if($(this).data('type') == 'vimeo') var srchref="//player.vimeo.com/video/";
    else if($(this).data('type') == 'youtube') var srchref="https://www.youtube.com/embed/";
    
    if($(this).data('autoplay') == true) autoplay = '?autoplay=1&muted=1';
    
    $("#video-popup-iframe").attr('src', srchref+id+autoplay);
    
    $("#video-popup-iframe").on('load', function() {
      $("#video-popup-container").show();
    });
  });
  
  $("#video-popup-close, #video-popup-overlay").on('click', function(e) {
    $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
    $("#video-popup-iframe").attr('src', '');
  });
  
  