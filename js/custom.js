jQuery(document).ready(function($) {

  $(".filter li").on("click", function(e) {
    e.preventDefault();
    const c = $(this).attr("data-type");
    $(this).toggleClass("active");
    $(".to-filter ." + c).toggle("slow");
  });

});