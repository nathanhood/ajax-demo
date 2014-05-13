(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#roll').click(roll2);
  }
  function roll2(e) {
    $.ajax({
      url: '/pairs/roll',
      type: 'GET',
      success: (function(response) {
        var $img1 = $('<img src=/img/dice' + response.side1 + '.png>');
        var $img2 = $('<img src=/img/dice' + response.side2 + '.png>');
        $('#die1').empty().append($img1);
        $('#die2').empty().append($img2);
        $('#result').text(("Winner: " + response.winner));
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=twodie.map
