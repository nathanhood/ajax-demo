(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#roll').click(roll);
  }
  function roll(e) {
    $.ajax({
      url: '/dice',
      type: 'POST',
      success: (function(response) {
        var $img = $('<img src=/img/dice' + response.side + '.png>');
        $('#result').empty().append($img);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=dice.map
