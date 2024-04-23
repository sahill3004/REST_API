- Setup .env file with postgresql
    USER  = ## User name of postgresql##
    HOST =  ## HOST of postgresql##
    DATABASE = ##  DATABASE of postgresql##
    PASSWORD = ## PASSWORD ##
    PORT = ## PORT ##
	
- Create students table in your database with "id","name","email","age","dob" this columns.

- install postman for API Testing or using.
   
   * For getting all students data use below URl with action (GET)
   http://localhost:3000/api/v1/students/
   
   * For getting one students with unique Id data use below URl with action (GET)
   http://localhost:3000/api/v1/students/--pass_id_here--
   
   *for adding new student use below URl with action (POST).ADD json in body
   http://localhost:3000/api/v1/students/
   
   --- ADD in body
	{
		"name" :  "name",
		 "email" : "email", 
		 "age" : age, 
		 "dob" : "year-month-date"
		
	}
	
	* For delete one students with unique Id data use below URl with action (DELETE)
	http://localhost:3000/api/v1/students/--pass_id_here--
	
	* For update one student name with unique Id data use below URl with action (UPDATE)
	http://localhost:3000/api/v1/students/--pass_id_here--
	 --- ADD in body
	{
		"name" :  "updated name",
	}