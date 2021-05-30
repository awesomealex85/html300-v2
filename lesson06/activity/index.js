  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('#clickme').click(function(){
    // $('')
    $('#submit').attr("disabled", false);
    return false;
  })
})
