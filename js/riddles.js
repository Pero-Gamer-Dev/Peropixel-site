fetch("data/riddles.json")
.then(res => res.json())
.then(data => {
  let box = document.getElementById("riddleBox");

  data.forEach((r, index) => {
    let div = document.createElement("div");

    div.innerHTML = `
      <p>${r.question}</p>
      <input id="input${index}">
      <button onclick="check(${index}, '${r.answer}')">Submit</button>
      <p id="res${index}"></p>
    `;

    box.appendChild(div);
  });
});

function check(i, answer) {
  let val = document.getElementById("input"+i).value.toLowerCase();

  if(val === answer){
    document.getElementById("res"+i).innerHTML = "✅ Correct";
    localStorage.setItem("riddle_"+i, "true");
  } else {
    document.getElementById("res"+i).innerHTML = "❌ Wrong";
  }
}
