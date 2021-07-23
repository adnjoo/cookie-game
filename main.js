//declare variables
let button = document.getElementById("button");
let counter = document.getElementById("counter");
let container = document.getElementById("container");
let clear = document.getElementById("clear");

//add event listeners
button.addEventListener("click", () => {
  counter.innerHTML = +counter.innerHTML + 1;
  x = +counter.innerHTML + 1;
  addcookie();
});

clear.addEventListener("click", () => {
  x=0
  localStorage.setItem("cookies",0)
  let arr = document.querySelectorAll('img')
  for(i in arr){
    arr[i].remove()
  }
});

let x;

//initialize cookie in localStorage
setTimeout(() => {
  if (localStorage.getItem("cookies") === undefined) {
    localStorage.setItem("cookies",0);
  } else {
    x = localStorage.getItem("cookies");
    for (i = 0; i < x; i++) {
      addcookie();
    }
  }
}, 100);

//every time interval we increment cookies
setInterval(() => {
  x++;
  counter.innerHTML = x;
  // console.log(x);
  addcookie();
  localStorage.setItem("cookies", x);
}, 1000);

//this function adds a cookie img to the DOM
const addcookie = () => {
  let e = document.createElement("img");
  e.src = "./cookie.jpeg";
  e.classList.add("inline");
  container.appendChild(e);
};
