import { Controller, Get, Param, Put } from "@nestjs/common";
import {
	FindStudentResponseDto,
	StudentResponseDto,
} from "src/student/dto/student.dto";

@Controller("teachers/:teacherId")
export class studentsTeacherController {
	@Get("students")
	getStudents(
		@Param("teacherId") teacherId: string
	): FindStudentResponseDto[] {
		return `get all students from the teacher with the id of ${teacherId}`;
	}

	@Put("students/:studentId")
	updateStudentTeacher(
		@Param("teacherId") teacherId: string,
		@Param("studentId") studentId: string
	): StudentResponseDto {
		return `Update the student with the id of ${studentId} from the teacher with id of ${teacherId}`;
	}
}
