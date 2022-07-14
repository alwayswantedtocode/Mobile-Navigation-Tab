$(document).ready(function () {
  let navList = $(".navList").children(),
    navLength = $(".listItem").length,
    imageList = $(".images").children(),
    imagesLength = $(".images").children().length;

  function navigation() {
    for (let i = 0; i < navLength; i++) {
      let activeImage = $(".images")[i],
        activeNav = $(".listItem")[i];

      $(activeNav).click((event) => {
        $(".listItem").removeClass("active");
        $(activeNav).addClass("active");
        $(".images").removeClass("active");
        $(activeImage).addClass("active");
        event.preventDefault();
      });
    }
  }

  navigation();
});
