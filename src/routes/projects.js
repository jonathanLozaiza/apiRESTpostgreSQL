import {Router} from "express";
import {createProject, getProjects, getOneProject, deleteProject, updateProject} from '../controllers/projects.controller';

const router = Router();

// /api/projects/
// create project
router.post('/',createProject);
// get projects
router.get('/',getProjects);

// /api/projects/id
// get one Project
router.get('/:id',getOneProject);
// delete one project
router.delete('/:id',deleteProject);
// update project
router.put('/:id',updateProject);

export default router;