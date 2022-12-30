import { Controller, Get } from "@nestjs/common";

//this controller handles /students
@Controller("students")
export class StudentController {
	// get /students route
	@Get()
	getStudents() {
		return "All students";
	}
}
