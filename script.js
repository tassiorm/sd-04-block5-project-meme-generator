window.onload = function () {
  let text = document.getElementById("meme-text");

  let inputText = document.getElementById("text-input");
  // input text dynamically over the image
  inputText.addEventListener("input", () => { text.innerHTML = inputText.value })

}

