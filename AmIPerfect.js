function classifyNumber(num) {
  if (num <= 0) {
    return "Invalid";
  }

  let factorsSum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      factorsSum += i;
    }
  }

  if (factorsSum === num) {
    return "Perfect";
  } else if (factorsSum > num) {
    return "Abundant";
  } else {
    return "Deficient";
  }
}

// Test cases
console.log(classifyNumber(6));  
console.log(classifyNumber(12));  
console.log(classifyNumber(8));  
