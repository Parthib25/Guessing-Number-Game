document.querySelector(".correctnumber");
let x = 0,
  y = 0,
  z = 20;
let highscore = 0;
document.querySelector(".check-btn").addEventListener("click", function () {
  x = Number(document.querySelector(".guess").value);
  y = Math.floor(Math.random() * 21);

  if (x === y) {
    document.querySelector(".Number").textContent = String(y);
    document.querySelector(".correctnumber").textContent =
      "CORRECT NUMBER!π―π―π―";
    document.querySelector("article").style.backgroundColor = "green";
    if (z == 20) {
      z = 20;
    } else {
      z++;
    }
    if (z <= 0) {
      document.querySelector(".correctnumber").textContent = "You lost mate!π₯";
    }
    document.querySelector(".sc").textContent = z;
    if (z > highscore) {
      highscore = z;
      document.querySelector(".h").textContent = highscore;
    }
  }
  if (x != y) {
    document.querySelector(".Number").textContent = "?";
    document.querySelector(".correctnumber").textContent =
      "WRONG NUMBER MATEβ!";
    document.querySelector("article").style.backgroundColor = "#af111c";
     z--;
    document.querySelector(".sc").textContent = z;
  
  }
  if (!x) {
    document.querySelector(".Number").textContent = "β";
    document.querySelector(".correctnumber").textContent = "Error πΏ";
    document.querySelector("article").style.backgroundColor = "black";
    z--;
    document.querySelector(".sc").textContent = "Invalid number";
    if (z <= 0) {
      document.querySelector(".correctnumber").textContent = "You lost mate!π₯";
    }
    document.querySelector(".sc").textContent = z;
  }
  if (x < 0) {
    document.querySelector(".Number").textContent = "π€";
    document.querySelector(".sc").textContent = "First See the top right π€¦ββοΈ";
    document.querySelector("article").style.backgroundColor = "darkblue";
    z--;
    document.querySelector(".correctnumber").textContent = "Invalid number";
    if (z <= 0) {
      document.querySelector(".correctnumber").textContent = "You lost mate!π₯";
    }
    document.querySelector(".sc").textContent = z;
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("article").style.backgroundColor = "black";
  document.querySelector(".Number").textContent = "?";
  document.querySelector(".correctnumber").textContent = "Start Guessing....";
  document.querySelector(".sc").textContent = "0";
  z = 20;
});
document.querySelector(".Number").textContent = "?";
