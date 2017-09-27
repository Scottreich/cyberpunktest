$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
  });
});
