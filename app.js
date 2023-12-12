function signup(event) {
    event.preventDefault();
    var username = document.getElementById("username")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var userObj = {
        name: username.value,
        email: email.value,
        password: password.value
    }
    var getUsers = localStorage.getItem("users")
    if (getUsers === null) {
        localStorage.setItem("users", JSON.stringify([userObj]))
        alert("User successfully signup")
        window.location.href = "./index.html";
    }
    else {
        var userParse = JSON.parse(getUsers)
        var emailCheck = userParse.find(function (value, index) {
            if (value.email === userObj.email && value.password === userObj.password) {
                return value
            }
        })
        if (emailCheck === undefined) {
            userParse.push(userObj)
            localStorage.setItem("users", JSON.stringify(userParse))
            alert("User successfully signup")
             window.location.href = "./index.html";
        } else {
            alert("email address already exists!")
        }
    }
}
function login() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var userCollection = JSON.parse(localStorage.getItem("users"))
    console.log("userCollection", userCollection)
    var userExist = userCollection.find(function (value, index) {
        console.log("value", value.email)
        if (value.email === email.value && value.password === password.value) {
            return value
        }
    })
    if (!userExist) {
        alert("email OR password invalid")
        return
    } else {
        alert("successfully login")
        localStorage.setItem("userLogin", JSON.stringify(userExist))
        window.location.replace("./dashboard.html")
    }
    console.log("emailExist", userExist)
}
function loadAuthScreen() {
    var getUsers = JSON.parse(localStorage.getItem("userLogin"))
    if (getUsers !== null) {
        window.location.replace("./dashboard.html")
    }
}
