import Task from '../models/Tasks'

export async function createTasks(req, res){
    const {name,done,projectId} = req.body;
    try{
        const newTasks = await Task.create({
            name,
            done,
            projectId
        },
        {
            fields:["name","done","projectId"]
        });

        if(newTasks){
            return res.status(200).json({
                msg:"Tasks created successfully",
                date:newTasks
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"somethig goes wrong",
            data:{}
        })
    }
}

//get Tasks
export async function getTasks(req,res){
    try{
        const tasks = await Task.findAll({
            order:[
                ['id','DESC']
            ]
        })
        res.json({
            data:tasks
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

//get one Tasks
export async function getOneTasks(req,res){
    const {id} = req.params;
    try{
        const tasks = await Task.findOne({
            where:{
                id
            }
        });
        res.json({
            tasks
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

//delete a Tasks
export async function deleteTasks(req,res){
    const {id} = req.params;
    try{
        const deleteRowCount = await Task.destroy({
            where:{
                id
            }
        })
        res.json({
            msg:"Tasks deleted successfully",
            data: deleteRowCount
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

//update Tasks
export async function updateTasks(req,res){
    const {id} = req.params;
    const {name,done,projectId} = req.body;
    try{
        let tasks = await Task.findOne({
            where:{
                id
            }
        });

        if(!tasks){
            return res.status(404).json({
                msg:"Tasks not found"
            })
        }

        tasks = await tasks.update({
            name,
            done,
            projectId
        });

        res.json({
            msg:"Tasks updated successfully",
            data:tasks
        })

    }catch(error){
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

// get tasks for projects
export async function getTasksByProject(req,res){
    const {id} = req.params;
    try{
        const tasks = await Task.findAll({
            where:{
                projectId : id
            }
        });

        res.json({
            data:tasks
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}