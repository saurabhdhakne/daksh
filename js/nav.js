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

$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});

flag = false;

function navchange() {
  flag = !flag;
  if (flag) {
    document.getElementById("sidenav").style.width = "0%";
  } else {
    document.getElementById("sidenav").style.width = "80%";
  }
}
navchange();

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loader").style = "height:0px; margin-top:50vh;";
  }, 3000);
});
