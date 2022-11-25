function hideEmailScreen() {
    if (validateEmail()) {
        $(".firstScreen").hide()
        $(".secondScreen").show()
        $(".thirdScreen").hide()
    } else {
        document.getElementById("email_validation_msg").innerHTML = 'Please enter a valid email address'
    }
}

function hidePasswordScreen() {
    $(".secondScreen").hide()
    $(".thirdScreen").hide()
    $(".firstScreen").show()
    document.getElementById("response_msg").innerHTML = "";
    document.getElementById("success_msg").innerHTML = "";
    document.getElementById("email_validation_msg").innerHTML = "";

}

function showOnlySuccessScreen(result) {
    $(".secondScreen").hide()
    $(".firstScreen").hide()
    $(".thirdScreen").show()
    document.getElementById("success_msg").innerHTML = 'user ' + result.email + ' created successfully';
}

function signUp() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;

    $.ajax({
        type: "POST",
        url: "https://dev-ttymk7xq.us.auth0.com/dbconnections/signup",
        contentType: "application/json",
        data: JSON.stringify(
            {
                email: email,
                password: password,
                connection: 'Username-Password-Authentication'
            }
        ),
        crossDomain: true,
        success: function (result) {
            showOnlySuccessScreen(result)
        },
        error: function (err) {
            document.getElementById("response_msg").innerHTML = err.responseJSON.description;
        }
    });
}