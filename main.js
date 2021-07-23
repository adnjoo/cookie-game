//declare variables
let button = document.getElementById("button");
let counter = document.getElementById("counter");
let container = document.getElementById("container");
let clear = document.getElementById("clear");
let cookies;

//add event listeners
button.addEventListener("click", () => {
  counter.innerHTML = +counter.innerHTML + 1;
  cookies = +counter.innerHTML + 1;
  addcookie();
});

clear.addEventListener("click", () => {
  cookies = 0;
  localStorage.setItem("cookies", 0);
  let arr = document.querySelectorAll("img");
  for (i in arr) {
    arr[i].remove();
  }
});

//initialize cookie in localStorage
setTimeout(() => {
  if (localStorage.getItem("cookies") === undefined) {
    localStorage.setItem("cookies", 0);
  } else {
    cookies = localStorage.getItem("cookies");
    for (i = 0; i < cookies; i++) {
      addcookie();
    }
  }
}, 100);

//every time interval we increment cookies
setInterval(() => {
  cookies++;
  counter.innerHTML = cookies;
  document.title = `${cookies} cookies - Cookie clicker`;
  addcookie();
  localStorage.setItem("cookies", cookies);
}, 100);

//this function adds a cookie image to the DOM
const addcookie = () => {
  let e = document.createElement("img");
  e.src = "./cookie.jpeg";
  e.classList.add("inline");
  container.appendChild(e);
};
