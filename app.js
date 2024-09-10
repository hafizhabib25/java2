question1


var a = 10; // Replace 10 with any desired number

document.write("The value of a is: " + a + "<br>");

// Pre-increment: ++a increments a before using it
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// Post-increment: a++ uses a before incrementing it
document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// Negation: -a negates the value of a
document.write("The value of -a is: " + -a + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// Post-decrement: a-- uses a before decrementing it
document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br>");

















question 2



var a = 2, b = 1;
var result = --a - -b + ++b + b--;




question 3

let userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");



question 4


let number = prompt("Enter a number (or press Enter for the multiplication table of 5):");

if (number === "") {
  number = 5;
}

for (let i = 1; i <= 10; i++) {
  let result = number * i;
  console.log(number + " x " + i + " = " + result);
}





question 5


let subject1 = prompt("Enter the first subject name:");
let subject2 = prompt("Enter the second subject name:");
let subject3 = prompt("Enter the third subject name:");









question 6


let totalMarksPerSubject = 100;



question 7




// Get obtained marks for remaining 2 subjects
let obtainedMarksSubject2 = prompt("Enter obtained marks for " + subject2 + ":");
let obtainedMarksSubject3 = prompt("Enter obtained marks for " + subject3 + ":");

// Calculate total marks and percentage
let totalMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
let percentage = (totalMarks / (totalMarksPerSubject * 3)) * 100;

// Display result in a table
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject1 + "</td><td>" + obtainedMarksSubject1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject2 + "</td><td>" + obtainedMarksSubject2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject3 + "</td><td>" + obtainedMarksSubject3 + "%</td></tr>");
document.write("<tr><th>Total</th><th>" + (totalMarksPerSubject * 3) + "</th><th>" + totalMarks + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");