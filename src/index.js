let button = document.getElementById("my-button");
let textedit = document.getElementById("text");
let addbutton = document.getElementById("add-data");

button.addEventListener("click", () => {
  console.log("hello world");
  textedit.innerText = "Moi maailma";
});

addbutton.addEventListener("click", () => {
  const addtext = document.getElementById("textadd");
  let newli = document.createElement("li");
  newli.innerText = document.getElementById("data").value;
  addtext.appendChild(newli);
});
