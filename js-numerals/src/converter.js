const convertToWords = (number, lang) => {
  const n = Math.floor(Math.abs(number));
  const nums =
    "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
  const tens =
    "zero ten twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
  
  const hundred = 100;
  const thousand = 1000;
  const million = 1000000;
  const billion = 1000000000;
  const trillion = 1000000000000;
  

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
      " thousand" +
      (n % thousand && n % thousand < hundred ? " and" : "") +
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

module.exports = convertToWords;
