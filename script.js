const name = document.getElementById("username");
const pwd = document.getElementById("password");
const btn = document.getElementById("submit");
const cbox = document.getElementById("checkbox");

const exist = document.createElement("button");

exist.id = "existing";
exist.type = "button";
exist.textContent = "Login as existing user";
exist.style.display = "none";

document.body.appendChild(exist);

if (localStorage.getItem("username") && localStorage.getItem("password")) {
    exist.style.display = "block";
}

btn.addEventListener("click", (event) => {
    event.preventDefault();

    alert(`Logged in as ${name.value}`);

    if (cbox.checked) {
        localStorage.setItem("username", name.value);
        localStorage.setItem("password", pwd.value);

        exist.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");

        exist.style.display = "none";
    }
});

exist.addEventListener("click", () => {
    alert(`Logged in as ${localStorage.getItem("username")}`);
});