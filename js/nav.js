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
      document.getElementById("navbarMobile").classList.add("blurry");
    } else {
      document.getElementById("navbarMobile").classList.remove("blurry");
    }
  });
});

$(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      document.getElementById("navbar").classList.add("blurry");
    } else {
      document.getElementById("navbar").classList.remove("blurry");
    }
  });
});
