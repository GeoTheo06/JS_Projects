import { Controller, Get, Param, Put } from "@nestjs/common";
import {
	FindStudentResponseDto,
	StudentResponseDto,
} from "src/student/dto/student.dto";
import { StudentService } from "src/student/student.service";

@Controller("teachers/:teacherId")
export class studentsTeacherController {
	constructor(private readonly studentService: StudentService) {}

	@Get("students")
	getStudents(
		@Param("teacherId") teacherId: string
	): FindStudentResponseDto[] {
		return this.studentService.getStudentsByTeacherId(teacherId);
	}

	@Put("students/:studentId")
	updateStudentTeacher(
		@Param("teacherId") teacherId: string,
		@Param("studentId") studentId: string
	): StudentResponseDto {
		return this.studentService.updateStudentTeacher(teacherId, studentId);
	}
}
