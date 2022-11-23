document.getElementById("convert").addEventListener("click", function () {
  const inputNumber = document.getElementById("number").value;
  const output = document.getElementById("result");
  const lang = document.querySelector("input[name=language]:checked").value;
  output.innerText = convertToWords(inputNumber, lang);
});

const nums =
  "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const tens =
  "zero ten twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

const hundred = 100;
const thousand = 1000;
const million = 1000000;
const billion = 1000000000;
const trillion = 1000000000000;

const convertToWords = (number, lang) => {
  const n = Math.floor(Math.abs(number));

  if (n < 20) return nums[n];
  if (n < hundred) {
    return tens[Math.floor(n / 10)] + (n % 10 ? "-" + nums[n % 10] : "");
  }

  if (n < thousand) {
    return (
      nums[Math.floor(n / hundred)] +
      " hundred" +
      (n % hundred === 0 ? "" : " and " + convertToWords(n % hundred))
    );
  }

  if (lang === "uk-en" && n < 10000 && Math.floor(n / hundred) % 10) {
    return (
      convertToWords(Math.floor(n / hundred), lang) +
      " hundred" +
      (n % hundred === 0 ? "" : " and " + convertToWords(n % hundred))
    );
  }

  if (n < million) {
    return (
      convertToWords(Math.floor(n / thousand)) +
      " thousand " +
      (n % thousand && n % thousand < hundred ? " and " : "") +
      (n % thousand !== 0 ? " " + convertToWords(n % thousand) : "")
    );
  }

  if (n < billion) {
    return (
      convertToWords(Math.floor(n / million)) +
      " million" +
      (n % million !== 0 ? " " + convertToWords(n % million) : "")
    );
  }

  if (n < trillion) {
    return (
      convertToWords(Math.floor(n / billion)) +
      " billion" +
      (n % billion !== 0 ? " " + convertToWords(n % billion) : "")
    );
  }

  return (
    convertToWords(Math.floor(n / trillion)) +
    " trillion" +
    (n % trillion !== 0 ? " " + convertToWords(n % trillion) : "")
  );
};

/* tests should include:
7       === seven
42      === forty-two
1999    === one thousand nine hundred and ninety-nine
2001    === two thousand and one
17999   === seventeen thousand nine hundred and ninety-nine
100001  === one hundred thousand and one
342251  === three hundred and forty-two thousand two hundred and fifty-one
1300420 === one million three hundred thousand four hundred and twenty 
*/
