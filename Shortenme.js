function encodeString(input) {
  let encoded = "";
  let count = 1;

  for (let i = 1; i <= input.length; i++) {
    if (i === input.length || input[i] !== input[i - 1]) {
      encoded += (count > 1 ? count : "") + input[i - 1];
      count = 1;
    } else {
      count++;
    }
  }

  return encoded;
}

function decodeString(encoded) {
  let decoded = "";
  let count = "";

  for (let i = 0; i < encoded.length; i++) {
    if (!isNaN(encoded[i])) {
      count += encoded[i];
    } else {
      if (count === "") {
        decoded += encoded[i];
      } else {
        decoded += encoded[i].repeat(parseInt(count, 10));
        count = "";
      }
    }
  }

  return decoded;
}


const originalString = "AAAAAAAAAAABWWWWWWWWWWWBB";
const encodedString = encodeString(originalString);
console.log("Encoded:", encodedString);  
console.log("Decoded:", decodeString(encodedString));  
