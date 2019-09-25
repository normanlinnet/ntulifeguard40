const display = (title, content) => {
  document.getElementById("myLinks").style.display = "none";
  document.getElementById("content").innerHTML = content;
  document.getElementById("title").innerHTML = title;
};

function toggleMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document
  .getElementById("carry")
  .addEventListener("click", () => display("CARRY", contentCarry));

document
  .getElementById("release")
  .addEventListener("click", () => display("RELEASE", contentRelease));

document
  .getElementById("emt")
  .addEventListener("click", () => display("EMT", contentEMT));

document
  .getElementById("approach")
  .addEventListener("click", () => display("APPROACH", contentApproach));

document
  .getElementById("escape")
  .addEventListener("click", () => display("DEFENSE ESCAPE", contentEscape));
