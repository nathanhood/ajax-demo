(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#deal').click(deal);
  }
  function deal(e) {
    $.ajax({
      url: '/card/deal',
      type: 'GET',
      success: (function(response) {
        $('#card').css('background-position', '' + response.cardType + 'px ' + response.cardFamily + 'px');
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=card.map
