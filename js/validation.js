$(document).ready(function() {
    
  //Phone number validation method (custom)
  $.validator.addMethod("customphone", function(value, element) {
  // Define your regular expression pattern for phone number validation
   var pattern = /^\d+$/;

  // Test the value against the pattern
  return this.optional(element) || pattern.test(value);
}, "Please enter a valid phone number");


  $.validator.addMethod("customemail", 
  function(value, element) {
  return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);}, "Please enter valid email" );
  
  $.validator.addMethod('nospace', 
  function(value, element) {
      return $.validator.methods.required.call(this, $.trim(value), element);
  }, $.validator.messages.required);

$('#post_a_comment').validate({
  rules: { name: 'required', message: 'required'},
  messages: { name: 'This field is required', message: 'This field is required'},
  submitHandler: function(form) {
      $('.loader').show();
      // Prevent the default form submission
      event.preventDefault();
      
      var formData = new FormData(form); 
      const btn = document.getElementById('contactbtn');
      btn.setAttribute('disabled', true);

      $.ajax({
        url: '../comment_submit.php',
        type: 'POST',
        data: formData,
        dataType: 'json',
        contentType: false, 
        processData: false, 
        success: function(response) {
          // Clear any previous error messages
          $('#errorContainer').empty();
          btn.removeAttribute('disabled', false);
          $('.loader').hide();
          // Check the response from the server
          if (response && response.status === 'success') {
             form.reset();
          //   alert('display popup')
         
          $('#successModal').modal('show');        
          $('#successMessage').removeClass('d-none'); 

          } else if (response && response.status === 'error') {
            // If the response contains error messages, display them
                var errors = response.errors;
                $('.error').remove()
      
                $.each(errors, function(key, value) {
                  $err_label = '<label class="error">'+ value +'</label>'
                  $('input[name="'+key+'"]').after($err_label);
                });
          }
        },
        error: function(xhr, status, error) {
          console.log(error); // Log any errors for debugging
        }
      });
  }
});

$('#press_kit').validate({
  rules: { email: { required: true, nospace: true, customemail: true} },
  submitHandler: function(form) {
      $('.loader').show();
      // Prevent the default form submission
      event.preventDefault();
      
      var formData = new FormData(form); 
      const btn = document.getElementById('contactbtn');
      btn.setAttribute('disabled', true);

      $.ajax({
        url: 'presskit_submit.php',
        type: 'POST',
        data: formData,
        dataType: 'json',
        contentType: false, 
        processData: false, 
        success: function(response) {
          // Clear any previous error messages
          $('#errorContainer').empty();
          btn.removeAttribute('disabled', false);
          $('.loader').hide();
          // Check the response from the server
          if (response && response.status === 'success') {
             form.reset();
          } else if (response && response.status === 'error') {
            // If the response contains error messages, display them
                var errors = response.errors;
                $('.error').remove()
      
                $.each(errors, function(key, value) {
                  $err_label = '<label class="error">'+ value +'</label>'
                  $('input[name="'+key+'"]').after($err_label);
                });
          }
        },
        error: function(xhr, status, error) {
          console.log(error); // Log any errors for debugging
        }
      });
  }
});

  $('#blog_form').validate({
  rules: { 
      name: { required: true, nospace: true}, 
      phone: { required: true, nospace: true, customphone: true}, 
      email: { required: true, nospace: true, customemail: true}, 
      linkedin_url: { required: true, nospace: true, url: true},
      title: 'required', 
      description: 'required', 
      fileToUpload: { required: true, extension: 'pdf|Doc|Docx'}
  },
  messages: { 
      name: 'This field is required', 
      phone: 'This field is required',
  },
  errorPlacement: function(error, element) {
      if (element.attr("name") == "fileToUpload") {
          error.insertAfter(".dragdrop");
      } else {
          error.insertAfter(element);
      }
  },
  submitHandler: function(form) {
      $('.loader').show();
      // Prevent the default form submission
      event.preventDefault();
      
      var formData = new FormData(form); 
      const btn = document.getElementById('contactbtn');
      btn.setAttribute('disabled', true);

      $.ajax({
        url: '../write_to_us_submit.php',
        type: 'POST',
        data: formData,
        dataType: 'json',
        contentType: false, 
        processData: false, 
        success: function(response) {
          // Clear any previous error messages
          // $('#errorContainer').empty();
          // carrerFormBtn.removeAttribute('disabled', false);
          // $('.loader').hide();
          // // Check the response from the server
          // if (response && response.status === 'success') {
          //   form.reset();
          //   alert('display popup')
          // } else if (response && response.status === 'error') {
          //   // If the response contains error messages, display them
          //       var errors = response.errors;
          //       $('.error').remove()
      
          //       $.each(errors, function(key, value) {
          //         $err_label = '<label class="error">'+ value +'</label>'
          //         $('input[name="'+key+'"]').after($err_label);
          //       });
          // }
        },
        error: function(xhr, status, error) {
          console.log(error); // Log any errors for debugging
        }
      });
  }
});

$('#pitch_form').validate({
  rules: { 
      name: { required: true, nospace: true}, 
      phone: { required: true, nospace: true, customphone: true}, 
      email: { required: true, nospace: true, customemail: true}, 
      linkedin_url: { required: true, nospace: true, url: true},
      additional_links: {required: true, nospace: true},
      select_interest: {required: true, nospace: true},
      title: 'required', 
      description: 'required', 
      fileToUpload: { required: true, extension: 'pdf|Doc|Docx'}
  },
  messages: { 
      name: 'This field is required', 
      phone: 'This field is required',
  },
  errorPlacement: function(error, element) {
      if (element.attr("name") == "fileToUpload") {
          error.insertAfter(".dragdrop");
      } else {
          error.insertAfter(element);
      }
  },
  submitHandler: function(form) {
      $('.loader').show();
      // Prevent the default form submission
      event.preventDefault();
      
      var formData = new FormData(form); 
      const btn = document.getElementById('contactbtn');
      btn.setAttribute('disabled', true);

      $.ajax({
        url: '../write_to_us_submit.php',
        type: 'POST',
        data: formData,
        dataType: 'json',
        contentType: false, 
        processData: false, 
        success: function(response) {
          // Clear any previous error messages
          // $('#errorContainer').empty();
          // carrerFormBtn.removeAttribute('disabled', false);
          // $('.loader').hide();
          // // Check the response from the server
          // if (response && response.status === 'success') {
          //   form.reset();
          //   alert('display popup')
          // } else if (response && response.status === 'error') {
          //   // If the response contains error messages, display them
          //       var errors = response.errors;
          //       $('.error').remove()
      
          //       $.each(errors, function(key, value) {
          //         $err_label = '<label class="error">'+ value +'</label>'
          //         $('input[name="'+key+'"]').after($err_label);
          //       });
          // }
        },
        error: function(xhr, status, error) {
          console.log(error); // Log any errors for debugging
        }
      });
  }
});
});