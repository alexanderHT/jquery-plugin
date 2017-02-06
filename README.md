# jquery-plugin

create email validation using jquery, javascript, and dom


# Code ( Location : lib/validate-email.js )
```
/* function validateEmail for cek email is true or not*/
function validateEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/* function myFunction : when user type input, myFunction been call */
function myFunction () {

  var x = document.getElementById('myInput').value
  document.getElementById('demo').innerHTML = x

  if (validateEmail(x)) {
    document.getElementById('err-msg').setAttribute('hidden', true)
    $('#success-msg').removeAttr('hidden')
  }else {
    $('#err-msg').removeAttr('hidden')
  }
}
```
