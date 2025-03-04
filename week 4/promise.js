function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ status: 200, body: "success" });
      } else {
        reject(new Error("The API is not working"));
      }
    });
  }
  
  // Example Usage:
  getFullResponseFromAPI(true)
    .then((response) => console.log(response)) // Output: { status: 200, body: 'success' }
    .catch((error) => console.error(error.message)); // Won't run in this case
  
  getFullResponseFromAPI(false)
    .then((response) => console.log(response)) // Won't run in this case
    .catch((error) => console.error(error.message)); // Output: The API is not working
  