import {Router} from "express";
import {createTasks, getTasks, getOneTasks, deleteTasks, updateTasks, getTasksByProject } from "../controllers/tasks.controller";

const router = Router();

// /api/tasks/
// create tasks
router.post('/',createTasks);
// get tasks
router.get('/',getTasks);

// /api/tasks/id
// get one tasks
router.get('/:id',getOneTasks);
// delete one tasks
router.delete('/:id',deleteTasks);
// update tasks
router.put('/:id',updateTasks);
// get tasks by project
router.get('/project/:id',getTasksByProject);

export default router;