$(function () {
  function contact($myTanks, $boom) {
    var x_tank = $myTanks.offset().left;
    var y_tank = $myTanks.offset().top;
    var bottom_tank = y_tank + $myTanks.outerHeight();
    var right_tank = x_tank + $myTanks.outerWidth();
    var x_boom = $boom.offset().left;
    var y_boom = $boom.offset().top;
    var bottom_boom = y_boom + $boom.outerHeight();
    var right_boom = x_boom + $boom.outerWidth();
    var crash = true;
    if (
      x_tank > right_boom ||
      y_tank > bottom_boom ||
      bottom_tank < y_boom ||
      right_tank < x_boom
    ) {
      crash = false;
    }
    return crash;
  }
  setInterval(function () {
    if (contact($("#myTanks"), $("#boom"))) {
      $("#boom").hide();
      $("#myTanks").attr("src", "./explosion.png");
    }
  });
});
