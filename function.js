// Function declaration
function sayHello(name) {
    return "Hello " + name + "!";
  }
  
  console.log(sayHello("June"));
  
  // Practice 1
  function hoursStudied(hours) {
    return "I studied for " + hours + " hours today.";
  }
  
  console.log(hoursStudied(3));
  
  // Practice 2
  function makeUppercase(word) {
    return word.toUpperCase();
  }
  
  console.log(makeUppercase("tech3500"));
  
  // Function expression
  const checkHomework = function(done) {
    if (done) {
      return "Homework is completed.";
    } else {
      return "Homework still needs work.";
    }
  };
  
  console.log(checkHomework(true));
  
  // Arrow functions
  const addNumbers = (a, b) => a + b;
  console.log(addNumbers(5, 7));
  
  const numbers = [2, 4, 6, 8];
  const multiplied = numbers.map(num => num * 3);
  console.log(multiplied);
  
  const grades = [70, 85, 90, 60];
  const passing = grades.filter(grade => grade >= 75);
  console.log(passing);
  
  const tasks = ["Read", "Code", "Submit"];
  tasks.forEach(task => {
    console.log("Task: " + task);
  });
  
  // Default parameter
  function classInfo(course = "TECH 3500") {
    return "This class is " + course;
  }
  
  console.log(classInfo());
  
  // Destructuring
  const student = {
    name: "June",
    year: "Senior"
  };
  
  const { name, year } = student;
  console.log(name + " is a " + year);
  