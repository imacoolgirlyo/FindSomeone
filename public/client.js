const form = document.querySelector("form"),
body = document.querySelector("body"),
uploadBtn = document.querySelector(".upload"),
userName = document.querySelector(".user_name"),
userBirth = document.querySelector(".user_birth");

const url = "http://localhost:8000/"

const resHandler = (t) => {
    const resText = document.createElement("span");
    resText.innerHTML = t;
    
    body.appendChild(resText);
    
    userBirth.value = ""
    userName.value = ""

}

const formHandler = event => {
    event.preventDefault();
    const userBirthValue = userBirth.value;
    const userNameValue = userName.value;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            name : userNameValue,
            birth : userBirthValue,
        })
    }).then(res => res.text())
    .then(res => resHandler(res));

}

form.addEventListener("submit", formHandler);