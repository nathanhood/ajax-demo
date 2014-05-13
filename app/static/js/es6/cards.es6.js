(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#deal').click(deal);
  }

  function deal(e){

    $.ajax({
      url: '/cards/deal',
      type: 'GET',
      success: response => {
        $('#card').css('background-position', ''+response.cardType+'px '+response.cardFamily+'px');
      }
    });

    e.preventDefault();
  }

})();
