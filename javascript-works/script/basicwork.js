function fnAddNumber(num1, num2) {
  console.log(num1 + num2);
}

function fnAddNumberAccept() {
  num1 = parseInt(prompt("Enter number 1", "10"));
  num2 = parseInt(prompt("Enter number 2", "10"));

  console.log("Addition of two numbers ", num1 + num2);
}

function fnCheckToVote() {
  name = prompt("Enter your name");
  age = parseInt(prompt("Enter your age ", "18"));
  myDivElement = document.getElementById("myDiv");
  msg = "";

  if (age >= 18) {
    msg = "<h2>You are Eligible to vote " + name + "</h2>";
  } else {
    msg =
      "<h2>Sorry, you have to wait for " +
      (18 - age) +
      " years " +
      name +
      "</h2>";
  }
  //  window.document.writeln(msg);
  myDivElement.innerHTML = msg;
}
