const sequence = [0,1,1]

for (let i = 3; i <= 10; i++) {
  sequence.push(sequence[i-1]+sequence[i-2]) 
}

console.log(sequence)
