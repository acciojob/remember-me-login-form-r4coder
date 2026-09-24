const name = document.getElementById("username");
const pwd = document.getElementById("password");
const btn = document.getElementById("submit");
const cbox = document.getElementById("checkbox");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    alert(`Logged in as ${name.value}`);

    if (cbox.checked) {
        localStorage.setItem("username", name.value);
        localStorage.setItem("password", pwd.value);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
});

if (localStorage.getItem("username") && localStorage.getItem("password")) {

    const exist = document.createElement("button");

    exist.id = "existing";
    exist.type = "button";
    exist.textContent = "Login as existing user";

    document.body.appendChild(exist);

    exist.addEventListener("click", () => {
        alert(`Logged in as ${localStorage.getItem("username")}`);
    });
}

