import "./styles.scss";

console.log("loaded input script");

let el = document.querySelector(".base .input");
let widthMachine = document.querySelector(".base .width-machine");
el.addEventListener("keyup", () => {
  widthMachine.innerHTML = el.value || "placeholder";
});
