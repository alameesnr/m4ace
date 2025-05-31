const express = require('express');
const router = express.Router();


router.get('/user/:id', (req, res) => {
  const userId = req.params.id;

 
  res.json({
    message: 'User fetched successfully',
    user: {
      id: userId,
      name: 'Jane Doe',
      email: 'janedoe@example.com'
    }
  });
});


module.exports = router;
