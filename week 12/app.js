const express = require('express');
const app = express();
const port = 3000;

app.get('/register', (req, res) => {
  res.send('Hello, Express!');
});
app.use()

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
