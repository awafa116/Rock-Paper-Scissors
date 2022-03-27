//------------------------------
// C H O O S E   S E C T I O N
//------------------------------
const choices = document.querySelectorAll(".choose-sec .choice");
const chooseSec = document.querySelector(".choose-sec");
let playerPicked = "";

// taking player choice ...
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    playerPicked = choice.id;
  });
});
// animating choice section out
const tlChoose = gsap.timeline({
  defaults: { duration: ".5", ease: "Power2.easeOut" },
});
chooseSec.addEventListener("click", () => {
  if (playerPicked != "") {
    tlChoose.to(chooseSec, { x: 20, opacity: 0 });
    tlChoose.set(chooseSec, { display: "none" });
  }
});

//--------------------------
// R U L E S   W I N D O W
//--------------------------
const rulesClose = document.querySelector(".close-rules-btn");
const rulesOpen = document.querySelector(".rules-btn");
const rules = document.querySelector(".rules-container");
const tlRules = gsap.timeline({
  defaults: { duration: ".5", ease: "Power2.easeOut" },
});
rulesOpen.addEventListener("click", () => {
  tlRules.set(rules, { display: "flex" });
  tlRules.fromTo(rules, { opacity: 0 }, { opacity: 1 });
});
rulesClose.addEventListener("click", () => {
  tlRules.fromTo(rules, { opacity: 1 }, { opacity: 0, duration: 0.3 });
  tlRules.set(rules, { display: "none" });
});
