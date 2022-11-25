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
            document.getElementById("success_msg").innerHTML = 'user ' + result.email + ' created successfully';
        },
        error: function (err) {
            document.getElementById("response_msg").innerHTML = err.responseJSON.description;
        }
    });
}