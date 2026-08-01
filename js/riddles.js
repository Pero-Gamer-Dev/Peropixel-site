function checkAnswer() {
  let answer = document.getElementById("answer1").value.toLowerCase();
  if (answer === "minion") {
    document.getElementById("result").innerHTML = "Correct! 🔓 Leak Unlocked!";
    window.location.href = "leaks.html";
  } else {
    document.getElementById("result").innerHTML = "Wrong...";
  }
}
