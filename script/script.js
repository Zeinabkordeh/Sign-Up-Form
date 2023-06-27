$(document).ready(function() {
    $('#clearBtn').click(function() {
      $('#additionalDetailsLabel').hide();
      $('#additionalDetailsInput').hide();
    });
    
    $('#referredby').change(function() {
      var selectedOption = $(this).val();
      if (selectedOption === 'magic' || selectedOption === 'other') {
        $('#additionalDetailsLabel').show();
        $('#additionalDetailsInput').show();
      } else {
        $('#additionalDetailsLabel').hide();
        $('#additionalDetailsInput').hide();
      }
    });
  });