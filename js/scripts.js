$(".user-menu").click(function() {
  $(this).toggleClass("show");
});

// Expandable Data Table
$(".js-clickable-row").each(function () {
  $(this).click(function () {
    $(this).toggleClass("row-active");
    $(this).parent().find(".expandable").toggleClass("row-open");
  });
});
