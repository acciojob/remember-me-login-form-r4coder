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

const exist = document.getElementById("existing");

exist.style.display = "none";

if (localStorage.getItem("username") && localStorage.getItem("password")) {
    exist.style.display = "block";
}

exist.addEventListener("click", () => {
    alert(`Logged in as ${localStorage.getItem("username")}`);
});
