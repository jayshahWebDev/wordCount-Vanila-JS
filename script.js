let textInput = document.querySelector("#textarea");
let countBtn = document.querySelector(".countBtn");
let countTitle = document.querySelectorAll(".count");
let wordCountTitle = document.querySelector(".wordCount");
let charCountTitle = document.querySelector(".charCount");

countBtn.addEventListener("click", () => {
  if (textInput.value.trim().length <= 0) {
    alert("Please Enter Some Input");
    return;
  }

  let charCount = textInput.value.replace(/ /g, "").length;
  let wordCount = textInput.value.trim().replace(/\s+/g, " ").split(" ").length;

  wordCountTitle.style.display = "block";
  charCountTitle.style.display = "block";

  wordCountTitle.textContent = `Word Count: ${wordCount}`;
  charCountTitle.textContent = `Character Count: ${charCount}`;
});
