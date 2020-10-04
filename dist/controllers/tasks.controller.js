"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTasks = createTasks;
exports.getTasks = getTasks;
exports.getOneTasks = getOneTasks;
exports.deleteTasks = deleteTasks;
exports.updateTasks = updateTasks;
exports.getTasksByProject = getTasksByProject;

var _Tasks = _interopRequireDefault(require("../models/Tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createTasks(_x, _x2) {
  return _createTasks.apply(this, arguments);
} //get Tasks


function _createTasks() {
  _createTasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, done, projectId, newTasks;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectId = _req$body.projectId;
            _context.prev = 1;
            _context.next = 4;
            return _Tasks["default"].create({
              name: name,
              done: done,
              projectId: projectId
            }, {
              fields: ["name", "done", "projectId"]
            });

          case 4:
            newTasks = _context.sent;

            if (!newTasks) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(200).json({
              msg: "Tasks created successfully",
              date: newTasks
            }));

          case 7:
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              msg: "somethig goes wrong",
              data: {}
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _createTasks.apply(this, arguments);
}

function getTasks(_x3, _x4) {
  return _getTasks.apply(this, arguments);
} //get one Tasks


function _getTasks() {
  _getTasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var tasks;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Tasks["default"].findAll({
              order: [['id', 'DESC']]
            });

          case 3:
            tasks = _context2.sent;
            res.json({
              data: tasks
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              msg: "something goes wrong"
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getTasks.apply(this, arguments);
}

function getOneTasks(_x5, _x6) {
  return _getOneTasks.apply(this, arguments);
} //delete a Tasks


function _getOneTasks() {
  _getOneTasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, tasks;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Tasks["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            tasks = _context3.sent;
            res.json({
              tasks: tasks
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              msg: "something goes wrong"
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getOneTasks.apply(this, arguments);
}

function deleteTasks(_x7, _x8) {
  return _deleteTasks.apply(this, arguments);
} //update Tasks


function _deleteTasks() {
  _deleteTasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Tasks["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              msg: "Tasks deleted successfully",
              data: deleteRowCount
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(500).json({
              msg: "something goes wrong"
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _deleteTasks.apply(this, arguments);
}

function updateTasks(_x9, _x10) {
  return _updateTasks.apply(this, arguments);
} // get tasks for projects


function _updateTasks() {
  _updateTasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, name, done, projectId, tasks;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, done = _req$body2.done, projectId = _req$body2.projectId;
            _context5.prev = 2;
            _context5.next = 5;
            return _Tasks["default"].findOne({
              where: {
                id: id
              }
            });

          case 5:
            tasks = _context5.sent;

            if (tasks) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              msg: "Tasks not found"
            }));

          case 8:
            _context5.next = 10;
            return tasks.update({
              name: name,
              done: done,
              projectId: projectId
            });

          case 10:
            tasks = _context5.sent;
            res.json({
              msg: "Tasks updated successfully",
              data: tasks
            });
            _context5.next = 17;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              msg: "something goes wrong"
            });

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 14]]);
  }));
  return _updateTasks.apply(this, arguments);
}

function getTasksByProject(_x11, _x12) {
  return _getTasksByProject.apply(this, arguments);
}

function _getTasksByProject() {
  _getTasksByProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, tasks;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.prev = 1;
            _context6.next = 4;
            return _Tasks["default"].findAll({
              where: {
                projectId: id
              }
            });

          case 4:
            tasks = _context6.sent;
            res.json({
              data: tasks
            });
            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(500).json({
              msg: "something goes wrong"
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _getTasksByProject.apply(this, arguments);
}