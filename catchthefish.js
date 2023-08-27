function calculateEfficiency(K, L, M, N, Total) {
  let hitsByEachPerson = new Array(Total + 1).fill(0);

  for (let i = 1; i <= Total; i++) {
    if (i % K === 0) {
      hitsByEachPerson[i]++;
    }
    if (i % L === 0) {
      hitsByEachPerson[i]++;
    }
    if (i % M === 0) {
      hitsByEachPerson[i]++;
    }
    if (i % N === 0) {
      hitsByEachPerson[i]++;
    }
  }

  let totalHits = hitsByEachPerson.filter(hits => hits > 0).length;
  return totalHits;
}


console.log(calculateEfficiency(1, 2, 3, 4, 12)); 
console.log(calculateEfficiency(2, 3, 4, 5, 24)); 
