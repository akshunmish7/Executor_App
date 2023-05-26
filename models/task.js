const mongoose=require('mongoose');
// now creating a schema
const task_schema=new mongoose.Schema(
    {
        Description:{
            type:String
        },
        Category:{
            type:String
        },
        Due_Date:{
            type:Date
        },
    }
);
/* creating our model with "task_schema" as Schema */
const tasks=mongoose.model('tasks', task_schema);
/* exporting our model so that it can be used by index.js */
module.exports=tasks;