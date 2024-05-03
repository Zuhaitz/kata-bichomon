console.log(document.title);

// WHY NOT
document
  .querySelectorAll("a")
  .forEach((a) => a.setAttribute("target", "_blank"));

// 1
let gen1 = document.getElementById("gen-1");
gen1.innerText = "Generasión 1 Pokimon";

// 2
let gen1List = document.querySelector(".infocard-list");
gen1List.style.background = "#c0c0f0";
gen1List
  .querySelectorAll(".infocard")
  .forEach((n) => (n.style.background = "#b0b0f0"));

// 3
console.log(document.URL);

// 4
console.log(location.host);

// 5
let images = document.querySelectorAll("img");
console.log(images);

// 6
images.forEach((n) => {
  // n.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
  n.setAttribute(
    "src",
    "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
  );
});

// Extra
let cards = document.querySelectorAll(".infocard-lg-data.text-muted");
// let cards = document.querySelectorAll(".itype.flying");
// cards.forEach(
//   (n) => (n.parentNode.parentNode.style.background = "#c0f0c0")
// );

cards.forEach((n) => {
  if (n.querySelector(".itype.flying")) n.style.background = "#c0f0c0";
});
