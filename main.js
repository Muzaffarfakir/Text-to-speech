let textarea = document.getElementById("text");
let btn = document.getElementById("btn");

function fun(text) {
  let ut = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(ut)

}
btn.addEventListener("click", (e) => {
  if (textarea.value !== "") {
    fun(textarea.value)
  }
})
