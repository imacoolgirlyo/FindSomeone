const form = document.querySelector("form"),
body = document.querySelector("body"),
uploadBtn = document.querySelector(".upload"),
userName = document.querySelector(".user_name"),
userBirth = document.querySelector(".user_birth");

const url = "http://localhost:8000/"

const resHandler = (t) => {
    const resText = document.createElement("div");
    resText.innerHTML = t;
    
    body.appendChild(resText);
    
    userBirth.value = ""
    userName.value = ""

}

const formHandler = event => {
    event.preventDefault();
    const userBirthValue = userBirth.value;
    const userNameValue = userName.value;

    console.log(userBirthValue);

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
    .then(result => resHandler(result));

}

const addData = (d) => {
    const div = document.createElement("div");
    div.innerHTML = d;

    body.appendChild(div);
}

const showDB = () => {

    console.log("this is client");
    fetch('/users')
    .then(response => response.json())
    .then(data => {
        const { users } = data;
        users.forEach(user => addData(user) );
    })
    .catch(err => console.error(err));

}

showDB();

form.addEventListener("submit", formHandler);