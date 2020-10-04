import Projects from '../models/Projects'

export async function createProject(req, res){
    const {name,priority,description,deliverydate} = req.body;
    try{
        const newProject = await Projects.create({
            name,
            priority,
            description,
            deliverydate
        },{
        fields:[
            'name',
            'priority',
            'description',
            'deliverydate'
        ]});

        if(newProject){
            return res.status(200).json({
                msg:"project created successfully",
                date:newProject
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

//get projects
export async function getProjects(req,res){
    try{
        const projects = await Projects.findAll()
        res.json({
            data:projects
        })
    }catch(error){
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

//get one project
export async function getOneProject(req,res){
    const {id} = req.params;
    try{
        const project = await Projects.findOne({
            where:{
                id
            }
        });
        res.json({
            project
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

//delete a project
export async function deleteProject(req,res){
    const {id} = req.params;
    try{
        const deleteRowCount = await Projects.destroy({
            where:{
                id
            }
        })
        res.json({
            msg:"project deleted successfully",
            data: deleteRowCount
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

//update project
export async function updateProject(req,res){
    const {id} = req.params;
    const {name,priority,description,deliverydate} = req.body;
    try{
        let project = await Projects.findOne({
            where:{
                id
            }
        });

        if(!project){
            return res.status(404).json({
                msg:"project not found"
            })
        }

        project = await project.update({
            name,
            priority,
            description,
            deliverydate
        });

        res.json({
            msg:"project updated successfully",
            data:project
        })

    }catch(error){
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}