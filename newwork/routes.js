const express = require('express');
const router = express.Router();
const { updateTodo, deleteTodo } = require('./controller');

// Routes
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
