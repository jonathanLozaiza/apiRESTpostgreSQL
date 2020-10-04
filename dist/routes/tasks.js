"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks.controller");

var router = (0, _express.Router)(); // /api/tasks/
// create tasks

router.post('/', _tasks.createTasks); // get tasks

router.get('/', _tasks.getTasks); // /api/tasks/id
// get one tasks

router.get('/:id', _tasks.getOneTasks); // delete one tasks

router["delete"]('/:id', _tasks.deleteTasks); // update tasks

router.put('/:id', _tasks.updateTasks); // get tasks by project

router.get('/project/:id', _tasks.getTasksByProject);
var _default = router;
exports["default"] = _default;