const convertToWords = require("./converter");

test("british english 2160 returns twenty-one hundred and sixty", () => {
    expect(convertToWords(2160, 'uk-en')).toBe("twenty-one hundred and sixty");
    expect(convertToWords(2160, 'uk-en')).not.toBe("two thousand one hundred and sixty");
  });  

test("1 return one", () => {
  expect(convertToWords(1)).toBe("one");
});

test("7 return seven", () => {
  expect(convertToWords(7)).toBe("seven");
  expect(convertToWords(7)).not.toBe("one");
});

test("42 return forty-two", () => {
  expect(convertToWords(42)).toBe("forty-two");
});

test("1999 return one thousand nine hundred and ninety-nine", () => {
  expect(convertToWords(1999)).toBe(
    "one thousand nine hundred and ninety-nine"
  );
  expect(convertToWords(7)).not.toBe("two");
});

test("2001 return two thousand and one", () => {
  expect(convertToWords(2001)).toBe("two thousand and one");
});

test("17999 return seventeen thousand nine hundred and ninety-nine", () => {
  expect(convertToWords(17999)).toBe(
    "seventeen thousand nine hundred and ninety-nine"
  );
});

test("100001 return one hundred thousand and one", () => {
  expect(convertToWords(100001)).toBe("one hundred thousand and one");
});

test("342251 return three hundred and forty-two thousand two hundred and fifty-one", () => {
  expect(convertToWords(342251)).toBe(
    "three hundred and forty-two thousand two hundred and fifty-one"
  );
});

test("1300420 return one million three hundred thousand four hundred and twenty", () => {
  expect(convertToWords(1300420)).toBe(
    "one million three hundred thousand four hundred and twenty"
  );
});
