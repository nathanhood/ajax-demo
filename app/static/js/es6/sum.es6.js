(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
  }

  function add(e){
    var data = $('#sum').serialize();//sucks out information from all inputs and puts it into string
    console.log(data);

    $.ajax({
      url: '/sum', //url
      type: 'POST', //verb
      data: data, //data you are sending. will be in the body of req (POST)
      success: response => { //function that will get called on returned object when response comes back.
        $('#result').text(response.sum); //rendering the response to the add function in the div.
      }
    });

    e.preventDefault();//preventing event default behavior aka form submission
  }

})();
