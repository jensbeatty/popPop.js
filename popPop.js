// JavaScript Document
var windowHeight = $(window).height();
var windowPos = $(window).scrollTop();
var windowWidth = $(window).width();
var windowSize = "Not Detected"

if (windowWidth>767)
  {
  windowSize="big_screen";
  }
if (windowWidth<768)
  {
  windowSize="small_screen";
  }

$('body').scrollTop(1);

window.onload = function () {
    windowWidth = $(window).width();
    windowHeight = $(window).outerHeight();

    $(".popup_box").addClass("popup_closed");
    $(".popup_box").css({"min-height": windowHeight});
    $("#screen_size").text(windowSize);
    $("body").addClass(windowSize);
};

window.onresize=function(){
    windowWidth = $(window).width();
    windowHeight = $(window).outerHeight();

    $(".popup_box").css({"min-height": windowHeight});
    $("#screen_size").text(windowSize);

    if (windowWidth>767)
      {
        windowSize="big_screen";
        $("body").removeClass("small_screen");
        $("body").addClass("big_screen");
        popupLeftMargin = (windowWidth-popupWidth)/2 + "px" ;
        popupTopMargin = (windowHeight-popupHeight)/2 + "px" ;

        $(".popup").css({"left": popupLeftMargin});
        $(".popup").css({"top": popupTopMargin});

        if ($(".popup").is(':visible'))

          {
            $("#page_box").show();
          }

      }
    if (windowWidth<768)
      {
        windowSize="small_screen";
        $("body").removeClass("big_screen");
        $("body").addClass("small_screen");

        if ($(".popup").is(':visible'))

          {
            $("#page_box").hide();
          }
      }
};

$('#popup_trigger_id').click(function () {
    windowPos = $(window).scrollTop();
    $("#popup_id").show();

    if (windowSize=="small_screen")
      {
        $("#page_box").hide();
        $('body').scrollTop(1);
      }


    popupWidth = $(".popup").outerWidth();
    popupHeight = $(".popup").outerHeight();
    $("#popup_size").text(popupWidth);

    if (windowSize=="big_screen")
      {
        popupLeftMargin = (windowWidth-popupWidth)/2 + "px" ;
        popupTopMargin = (windowHeight-popupHeight)/2 + "px" ;
        $(".popup").css({"left": popupLeftMargin});
        $(".popup").css({"top": popupTopMargin});
      }
});

// close the pop up by clicking anything inside the popup with a class of close
$('.popup .close').click(function () {
    $(this).parents(".popup_box").hide();
    $("#page_box").show();
    $('body').scrollTop(windowPos);
});

if (windowSize=="big_screen")
    {
        $( ".popup_box" ).click(function() {
            $(".popup_box").hide();
            $(".popup").click(function(event) {
                event.stopPropagation();
            })
        });
    }











