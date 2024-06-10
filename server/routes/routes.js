const { Router } = require('express');
const router = Router();
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controller/todoController');

router.get('/', getToDo);
router.post('/save', saveToDo);
router.put('/update/:id', updateToDo); // Added missing '/'
router.delete('/delete/:id', deleteToDo); // Added missing '/'

module.exports = router;
