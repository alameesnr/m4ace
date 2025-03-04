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
  