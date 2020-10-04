import Sequelize from "sequelize"

export const sequelize = new Sequelize(
    "mhribvpz",
    "mhribvpz",
    "keg_LuwGNGAsVQ80ZE60aEmUyZh4bzUE",
    {
        host:"lallah.db.elephantsql.com",
        dialect:"postgres",
        pool:{
            max:5,
            min:0,
            require:30000,
            idle:10000
        },
        logging:false
    }

)