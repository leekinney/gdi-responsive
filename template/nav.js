<script>
var $nav = $('header nav'),
    $toggleLink = $('.toggle-nav');

function toggleNav() {
  $nav.hide();
  $toggleLink.click(function(e) {
    e.preventDefault();
    $nav.toggle();
  });
}
if ($(window).width() < 620) {
  toggleNav();
}
$(window).resize(function() {
  if ($(window).width() < 620) {
    toggleNav();
  } else {
    $nav.show();
  }
});
</script>