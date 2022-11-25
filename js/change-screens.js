function hideEmailScreen() {
    if (validateEmail()) {
        $(".firstScreen").hide()
        $(".secondScreen").show()
    } else {
        document.getElementById("email_validation_msg").innerHTML = 'Please enter a valid email address'
    }
}

function hidePasswordScreen() {
    $(".secondScreen").hide()
    $(".firstScreen").show()
    document.getElementById("response_msg").innerHTML = "";
    document.getElementById("email_validation_msg").innerHTML = "";

}