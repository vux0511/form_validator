var inputFullname = document.getElementById("fullname");
var inputEmail = document.getElementById("email");
var inputPassword = document.getElementById("password");
var inputPasswordConfirmation = document.getElementById(
    "password_confirmation"
);

inputFullname.onblur = function () {
    if (inputFullname.value.length == 0) {
        document.getElementById("form-group").classList.add("invalid");
        document.getElementById("form-message").innerHTML =
            "Nhập vào trường này!";
    } else {
        document.getElementById("form-group").classList.remove("invalid");
        document.getElementById("form-message").innerHTML = "";
    }
};

email.onblur = function () {
    if (inputEmail.value.length == 0) {
        document.getElementById("form-group-email").classList.add("invalid");
        document.getElementById("form-message-email").innerHTML =
            "Nhập vào trường này!";
    } else {
        document.getElementById("form-group-email").classList.remove("invalid");
        document.getElementById("form-message-email").innerHTML = "";
    }
};

inputPassword.onblur = function () {
    if (inputPassword.value.length == 0) {
        document.getElementById("form-group-password").classList.add("invalid");
        document.getElementById("form-message-password").innerHTML =
            "Nhập vào trường này!";
    } else {
        document
            .getElementById("form-group-password")
            .classList.remove("invalid");
        document.getElementById("form-message-password").innerHTML = "";
    }
};

inputPasswordConfirmation.onblur = function () {
    if (inputPasswordConfirmation.value.length == 0) {
        document
            .getElementById("form-group-password-confirmation")
            .classList.add("invalid");
        document.getElementById(
            "form-message-password-confirmation"
        ).innerHTML = "Nhập vào trường này!";
    } else {
        document
            .getElementById("form-group-password-confirmation")
            .classList.remove("invalid");
        document.getElementById(
            "form-message-password-confirmation"
        ).innerHTML = "";
    }

    var password = document.getElementById("password").value;
    var password_confirmation = document.getElementById(
        "password_confirmation"
    ).value;

    if (password == password_confirmation) {
        console.log(
            `Mật khẩu 1 = ${password} - Mật khẩu 2 là ${password_confirmation}`
        );
        console.log("Mật khẩu trùng nhau!");
    } else {
        console.log(
            `Mật khẩu 1 = ${password} - Mật khẩu 2 là ${password_confirmation}`
        );
        console.log("Mật khẩu không trùng nhau!");
    }
};
