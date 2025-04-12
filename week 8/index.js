const fs = require('fs');
const path = require('path');

// Define file path
const filePath = path.join(__dirname, 'hello.txt');

// Step 1: Write to the file
fs.writeFile(filePath, 'Hello, File System!', (err) => {
  if (err) {
    return console.error('Error writing file:', err);
  }

  console.log('File created and content written.');

  // Step 2: Read from the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.error('Error reading file:', err);
    }

    console.log('File content:');
    console.log(data);
  });
});
