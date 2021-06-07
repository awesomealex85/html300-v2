  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('#clickme').click(function(){
    $('#disabled').tooltip('dispose');
    $('#submit').attr("disabled", false);
    return false;
  })
})
