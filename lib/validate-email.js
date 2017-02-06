// (function ($) {
// 	$.fn.emailValidator = function () {
//
// 		// your code here
// 	}
// })(jQuery)

/* my code */
function validateEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function myFunction () {
  // console.log('hallo world')
  var x = document.getElementById('myInput').value
  document.getElementById('demo').innerHTML = x
  // console.log(validateEmail(x))
  if (validateEmail(x)) {
    document.getElementById('err-msg').setAttribute('hidden', true)
    $('#success-msg').removeAttr('hidden')
  }else {
    $('#err-msg').removeAttr('hidden')
  }
}
