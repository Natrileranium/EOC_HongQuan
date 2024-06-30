 const register = document.getElementById("register");
 const userName = document.getElementById("name");
 const pw = document.getElementById("pass");
 
 register.addEventListener("submit", (event) => {
   event.preventDefault();
   //   console.log(userName.value);
   //   console.log(pw.value);
   if (userName.value.trim().length == 0 || pw.value.trim().length == 0) {
     alert("Nhập lại tài khoản hoặc mật khẩu!");
   } else {
     if (localStorage.users) {
       let users = JSON.parse(localStorage.getItem("users"));
       users.push({
         userName: userName.value.trim(),
         password: pw.value.trim(),
       });
       localStorage.setItem("users", JSON.stringify(users));
     } else {
       localStorage.setItem(
         "users",
         JSON.stringify([
           { userName: userName.value.trim(), password: pw.value.trim() },
         ])
       );
     }
     alert("Registered Successfully");
     window.location.href = "./eocl.html";
   }
 });