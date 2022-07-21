// document.getElementById('register_submit').addEventListener('click', function(e){
//     e.priventDefault()
//     // console.log(this.elements.fname.value);
//     // console.log(this);
//     console.log("jai");
// })
// // console.log(register);
// // const register=(this)=>{
// //     console.log(this);
// // }

function register() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;
  const cnf_password = document.getElementById("cnf_password").value;
  const gender = document.querySelector("input[name='gender']:checked").value;

  const data = {
    fname: fname,
    lname: lname,
    email: email,
    mobile: mobile,
    password: password,
    cnf_password: cnf_password,
    gender: gender,
  };

  let users = JSON.parse(localStorage.getItem("users"));    /*getting data from local storage */
  if (users == null) 
    localStorage.setItem("users", JSON.stringify([data]));      /*storing data in local storage */
  else {
    var check = 0;
    users.map((user) => {                       /*itrating user data or chaking user is ragistered or not */
      if (user.email == email) {
        check = 1;
      }
    });
    if (check === 0) {
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));    /*storing data in local storage */
      alert("User successfully registered");
    } else {
      alert("User already registered");
    }
  }
}
const data{
  usrename: uname,
  password: pass,
  
}