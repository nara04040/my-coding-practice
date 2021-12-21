const age = parseInt(prompt("how old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number.");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}

// 1. parseInt = string 을 number처럼 type을 변경할때 쓰임
// isNaN = NaN이 뭔지 판별.
// 2. else if = else 에서 if 를 더한 값
// 3. && = and,  || = or , === is equal.
