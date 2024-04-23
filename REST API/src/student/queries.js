const getStudents = "select * from students";
const getStudentbyid = "select * from students where id = $1";
const addstudent = "INSERT INTO students (name, email, age, dob)VALUES ($1, $2, $3, $4)";
const checkEmailExists = "select s from students s where s.email = $1";
const deletestudent  = "delete from students where id = $1";
const updatestudent = "UPDATE students SET name =  $1 where id = $2";


module.exports = {
    getStudents,getStudentbyid,checkEmailExists,addstudent,deletestudent,updatestudent
}