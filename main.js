function calculate() {
  let a = Number(prompt("Please enter first number..."));
  let b = Number(prompt("Please enter second number..."));
  if (a > b) {
    alert(a * b);
  } else if (a < b) {
    alert(a + b);
  } else if (a == b) {
    alert(a);
  } else alert("Not a number");
}

function switchCase() {
  let day = Number(
    prompt("Please Enter a number to find out the day of the week...")
  );
  switch (day) {
    case 0:
      alert("Today is Sunday");
      break;
    case 1:
      alert("Today is Monday");
      break;
    case 2:
      alert("Today is Tuesday");
      break;
    case 3:
      alert("Today is Wednesday");
      break;
    case 4:
      alert("Today is Thursday");
      break;
    case 5:
      alert("Today is Friday");
      break;
    case 6:
      alert("Today is Saturday");
      break;
    default:
      alert("Invalid Value");
  }
}
