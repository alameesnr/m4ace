const express = require('express');
const router = express.Router();

// GET /user/:id - fetch user by ID
router.get('/user/:id', (req, res) => {
  const userId = req.params.id;

  // Example dummy response
  res.json({
    message: 'User fetched successfully',
    user: {
      id: userId,
      name: 'Jane Doe',
      email: 'janedoe@example.com'
    }
  });
});

// GET /search?query=... - handle search
router.get('/search', (req, res) => {
  const searchQuery = req.query.query;

  // Example dummy response
  res.json({
    message: 'Search completed',
    query: searchQuery,
    results: [
      { id: 1, name: 'Result One' },
      { id: 2, name: 'Result Two' }
    ]
  });
});

module.exports = router;
