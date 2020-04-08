window.onload = function () {
  let memeContainer = document.querySelector("#meme-image-container");
  let uploadImg = document.getElementById("meme-insert");
  let imageMeme = document.getElementById("meme-image");
  let inpText = document.getElementById("text-input");
  let text = document.getElementById("meme-text");
  let btn1 = document.getElementById("button1");
  let btn2 = document.getElementById("button2");
  let btn3 = document.getElementById("button3");
  let reset = document.getElementById("buttonReset");

  uploadImg.addEventListener("input", function () {
    imageMeme.src = URL.createObjectURL(event.target.files[0]);
  });

  inpText.addEventListener("input", function () {
    text.innerHTML = inpText.value;
  });

  btn1.addEventListener("click", function () {
    memeContainer.style.border = "3px dashed red";
  });
  btn2.addEventListener("click", function () {
    memeContainer.style.border = "5px double blue";
  });
  btn3.addEventListener("click", function () {
    memeContainer.style.border = "6px groove green";
  });
  reset.addEventListener("click", function () {
    memeContainer.style.border = "";
  });
};
