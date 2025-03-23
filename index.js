//Using Promises in API Calls (Fetching Data)

const fetchUserData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "Alamin", age: 25 };
        resolve(data);
      }, 3000);
    });
  };
  
  // Using the Promise
  fetchUserData()
    .then((user) => console.log(`User: ${user.name}, Age: ${user.age}`))
    .catch((error) => console.error(error));


//Using fetch() with Promises to Call an API

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  })
  .then((data) => console.log("Post Title:", data.title))
  .catch((error) => console.error("Error:", error));



// Traditional function
function greet(name) {
    return "Hello, " + name;
  }
  console.log(greet("Alamin")); // ✅ Output: Hello, Alamin
  
  // Arrow function
  const greetArrow = (name) => `Hello, ${name}`;
  console.log(greetArrow("Alamin")); // ✅ Output: Hello, Alamin

  


  const user = { name: "Alamin", age: 25 };
  user.age = 26; // ✅ Allowed: Object properties can change
  console.log(user); // Output: { name: "Alamin", age: 26 }
  
  // user = { name: "New User" }; ❌ Error: Cannot reassign a const object



//Embedding Objects & Arrays

  const user = { name: "Alamin", role: "Backend Developer" };
  console.log(`User: ${user.name}, Role: ${user.role}`);
  // Output: User: Alamin, Role: Backend Developer
  
  const numbers = [10, 20, 30];
  console.log(`Array Values: ${numbers.join(", ")}`);
  // Output: Array Values: 10, 20, 30
  

  //Using Template Literals in Functions
  const greet = (name) => `Hello, ${name}! Hope you're enjoying JavaScript.`;
  console.log(greet("Alamin"));
  // Output: Hello, Alamin! Hope you're enjoying JavaScript.


  //Expression Interpolation inside Template Literals

const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// Output: The sum of 5 and 10 is 15.

//Using Backticks for Multi-line Strings)

const message = `Hello, Alamin!
Welcome to ES6.`;
console.log(message);


class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return {year, brand, model}
  };
}

// Creating an instance
const car = new Vehicle("Toyota", "Corolla", 2022);
console.log(car.displayInfo()); // Output: 2022 Toyota Corolla


function studentReport(student1, student2, subject, grade) {
  console.log(`📚 Subject: ${subject}`);
  console.log(`✅ ${student1} and ${student2} both received a grade of ${grade}.`);
}

// Example Usage
studentReport("Alamin", "Ahmed", "Mathematics", "A");
// ✅ Output:
// 📚 Subject: Mathematics
// ✅ Alamin and Ahmed both received a grade of A.
