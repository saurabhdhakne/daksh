function onOpen() {
  document.getElementById("sidenav").style.width = "60%";
}

function onClose() {
  document.getElementById("sidenav").style.width = "0%";
}

$(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      document.getElementById("navbarMobile").style = "margin-top:0px";
    } else {
      document.getElementById("navbarMobile").style = "margin-top:-80px";
    }
  });
});

$(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      document.getElementById("navbar").style = "margin-top:0px";
    } else {
      document.getElementById("navbar").style = "margin-top:-100px";
    }
  });
});