(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#sumAll').click(add);
  }
  function add(e) {
    var data = $('#sum').serialize();
    console.log(data);
    $.ajax({
      url: '/sumlist',
      type: 'POST',
      data: data,
      success: (function(response) {
        $('#result').text(response.sumAll);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=sumlist.map
