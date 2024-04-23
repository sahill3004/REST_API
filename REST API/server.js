const express =  require('express');
const studentsRoutes = require('./src/student/routes')
const app = express();
const port = 3000;
//  require("dotenv");
app.use(express.json())

app.get("/",(req,res)=>{
    return res.send("Hello world!!")
});

app.use('/api/v1/students',studentsRoutes);


app.listen(port,()=> console.log(`app listening on port ${port}`));