"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _projects = require("../controllers/projects.controller");

var router = (0, _express.Router)(); // /api/projects/
// create project

router.post('/', _projects.createProject); // get projects

router.get('/', _projects.getProjects); // /api/projects/id
// get one Project

router.get('/:id', _projects.getOneProject); // delete one project

router["delete"]('/:id', _projects.deleteProject); // update project

router.put('/:id', _projects.updateProject);
var _default = router;
exports["default"] = _default;