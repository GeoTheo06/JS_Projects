import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";

//this controller handles /students
@Controller("students")
export class StudentController {
	// get /students route
	@Get()
	getStudents() {
		return "All students";
	}

	@Get("/:studentId")
	getStudentById(@Param("studentId") studentId: string) {
		return `get student with the id of ${studentId}`;
	}

	@Post()
	createStudent(@Body() body) {
		return `create student with the following data ${JSON.stringify(body)}`;
	}

	@Put("/:studentId")
	updateStudent(@Param("studentId") studentId: string, @Body() body) {
		return `Update Student with id of ${studentId} with data of ${JSON.stringify(
			body
		)}`;
	}
}
