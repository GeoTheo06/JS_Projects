import { Controller, Get, Put } from "@nestjs/common";

@Controller("teachers/:teacherId")
export class studentsTeacherController {
	@Get("students")
	getStudents() {
		return "all students from specific teacher";
	}

	@Put("students/:studentId")
	updateStudentTeacher() {
		return "a student from this teacher";
	}
}
