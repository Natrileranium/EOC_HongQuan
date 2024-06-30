const login = document.getElementById("login");

login.addEventListener("submit", (event) => {
  event.preventDefault();

  let users = JSON.parse(localStorage.getItem("users"));
  console.log(users);

  const userName = document.getElementById("name");
  const pw = document.getElementById("pass");

  let check = users.map(
    (index) =>
      index.userName == userName.value.trim() &&
      index.password == pw.value.trim()
  );

  if (check[0] == true) {
    window.location.href = "../MainWeb/index.html";
  } else {
    alert("Wrong Username / Password");
  }
});