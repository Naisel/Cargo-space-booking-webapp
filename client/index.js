const adduser = document.querySelector(".submit");
const userid = document.getElementById("userid");
const username = document.getElementById("username");
const userage = document.getElementById("userage");

let uid = 0;
let uname = "";
let uage = 0;

async function getDtails() {
  try {
    uid = userid.value;
    userid.value = null;
    uname = username.value;
    username.value = null;
    uage = userage.value;
    userage.value = null;
  } catch (error) {
    console.log(error);
  }
}

adduser.addEventListener("click", () => {
  getDtails();
  console.log(uid);
  console.log(uname);
  console.log(uage);
  console.log("hello");
});
