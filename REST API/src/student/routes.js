const {  Router } = require('express');

const controller =  require('./controller')


const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addstudent);
router.put("/:id",controller.updatestudent);
router.get("/:id", controller.getStudentbyid);
router.delete("/:id",controller.deletestudent);

module.exports = router;