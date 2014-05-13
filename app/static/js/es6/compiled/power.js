(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#power').click(pow);
  }
  function pow(e) {
    var data = $('#values').serialize();
    console.log(data);
    $.ajax({
      url: '/power',
      type: 'POST',
      data: data,
      success: (function(response) {
        $('#result').text(response.power);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=power.map
