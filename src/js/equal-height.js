function equalHeight(group) {
  var tallest = 0;
  group.each(function() {
    var thisHeight = $(this).outerHeight();;
    if(thisHeight > tallest) {
      tallest = thisHeight;
    }
  });
  group.height(tallest);
}

// $(document).ready(function() {
//   equalHeight($('xxxx'));
// });
