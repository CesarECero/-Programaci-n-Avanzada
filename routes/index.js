var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/habits', async (req, res) => {
try {
  const habits = await habit.find();
 res.json(habits);
} catch (err) {
  res.status(500).json({ error: 'Error fetching habits' });
}
});
router.post('/habits', async (req, res) => {
  try {
    const { title, description } = req.body;
    const habit = new habit({ title, description });
    await habit.save();
    res.json(habit);
  } catch (err) {
    res.status(500).json({ error: 'Error creating habit' });
  }
});

router.delete('/habits/:id', async (req, res) => {
  try {
    await habit.findByIdAndDelete(req.params.id);
    res.json({ message: 'Habit deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting habit' });
  }
});

module.exports = router;
