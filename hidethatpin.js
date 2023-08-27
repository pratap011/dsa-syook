function convertPINToTexts(pin) {
  const binaryString = pin.toString(2);
  const rules = {
    1: "pop",
    10: "double rip",
    100: "hide your mints",
    1000: "fall",
    10000: "reverse the order of the output"
  };

  const texts = [];
  let reversed = false;

  for (let i = binaryString.length - 1; i >= 0; i--) {
    if (binaryString[i] === '1') {
      const rule = Math.pow(10, binaryString.length - 1 - i);
      if (rule === 10000) {
        reversed = true;
      } else {
        texts.push(rules[rule]);
      }
    }
  }

  if (reversed) {
    texts.reverse();
  }

  return texts;
}

// Test cases
console.log(convertPINToTexts(3));   // Output: [ "pop", "double rip" ]
console.log(convertPINToTexts(19));  // Output: [ "double rip", "pop" ]
