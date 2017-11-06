const express = require('express');
const router = express.Router();
const tasks = require('../controller/TasksController.js');

router.get("/", tasks.showIndex);
router.get("/edit", tasks.addTask);
router.post("/edit", tasks.createTask);
router.get("/edit/:id/", tasks.showTask);
router.delete("/edit/:id/", tasks.deleteTask);
router.edit("/edit/:id", tasks.editTask);


module.exports = router;