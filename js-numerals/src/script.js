document.getElementById("convert").addEventListener("click", function () {
  const inputNumber = document.getElementById("number").value;
  const output = document.getElementById("result");
  const lang = document.querySelector("input[name=language]:checked").value;
  inputNumber.length && (output.innerHTML = convertToWords(inputNumber, lang));
});
