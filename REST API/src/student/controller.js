const pool = require('../../db');
const queries = require("./queries");


const getStudents = (req,res)=>{
pool.query(queries.getStudents,(error,results) => {
    if(error) throw error;
    res.status(200).json(results.rows)
})
};

const getStudentbyid = (req,res)=>{
    let id = req.params.id;
    pool.query(queries.getStudentbyid,[id],(error,results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    })
    };

const addstudent = (req,res)=>{
    const  {name,email,age,dob} = req.body;
    //check if user exist
    pool.query(queries.checkEmailExists,[email],(error,results) => {
        if(results.rows.length){
            res.send("Email already exists.")
        }
    });

    //add student
    pool.query(
        queries.addstudent,
        [name,email,age,dob],(error,results) => {
        if(error) throw error;
        res.status(201).json("Student Created successfully!")
    })
    
};

const deletestudent = (req,res)=>{
    let id = parseInt(req.params.id);

    pool.query(queries.getStudentbyid,[id],(error,results) => {
        const noStudentFound  = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not not exist in database!")
        }

        pool.query(queries.deletestudent,[id],(error, results)=>{
            if(error) throw error;
            res.status(200).send("Student removed successfully.")
        })

    })
    };

    const updatestudent = (req,res) =>{
        const id = parseInt(req.params.id);

        const { name } = req.body;

        pool.query(queries.getStudentbyid,[id],(error,results)=>{
            const noStudentFound  = !results.rows.length;
            if(noStudentFound){
            res.send("Student does not not exist in database!")
            }
            pool.query(queries.updatestudent,[name,id],(error, results)=>{
                if(error) throw error;
                res.status(200).send("Student update successfully.")
            })
        })
    }



module.exports = {

    getStudents,getStudentbyid,addstudent,deletestudent,updatestudent
}