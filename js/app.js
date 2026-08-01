function enterSystem() {
  let terminal = document.getElementById("terminal");
  terminal.classList.remove("hidden");

  setTimeout(() => {
    window.location.href = "riddles.html";
  }, 2500);
}
