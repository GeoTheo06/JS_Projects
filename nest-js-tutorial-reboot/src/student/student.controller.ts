import { Controller, Get, Post, Put } from "@nestjs/common";

//this controller handles /students
@Controller("students")
export class StudentController {
	// get /students route
	@Get()
	getStudents() {
		return "All students";
	}

	@Get("/:studentId")
	getStudentById() {
		return "Get student by id";
	}

	@Post()
	createStudent() {
		return "create Student";
	}

	@Put()
	updateStudent() {
		return "Update Student";
	}
}
