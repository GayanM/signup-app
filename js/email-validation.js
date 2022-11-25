function validateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("email"); 
    if (email.value.match(mailformat)) {
        return true;
    } else {
        return false;
    }
}