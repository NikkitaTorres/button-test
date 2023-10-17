window.onload = function() {
  let h1 = document.querySelector("h1");
  h1.onclick = function() {
    window.alert("I am a heading element.");
  };

  let p = document.querySelector("p");
  p.onmouseover = function() {
    document.querySelector("p>em").innerText = "Don't be surprised";
  };

  let img = document.querySelector("img");
  img.onmouseover = function() {
    img.style.height = "700px";
  };

let body = document.querySelector("body")

let button1 = document.querySelector("button1");
button1.onclick = function() {
body.style.backgroundColor = "black";
body.style.color = "white";
};

let button2 = document.querySelector("button2");
button2.onclick = function() {
body.style.backgroundColor = "white";
body.style.color = "black";
};

let button3 = document.querySelector("button3");
button3.onclick = function() {
  body.style.fontSize = "initial";
};

let button4 = document.querySelector("button4");
button4.onclick = function() {
body.style.fontSize = "X-large";

};
};