import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import {
	CreateStudentDto,
	FindStudentResponseDto,
	StudentResponseDto,
	UpdateStudentDto,
} from "./dto/student.dto";
//this controller handles /students
@Controller("students")
export class StudentController {
	// get /students route
	@Get()
	getStudents(): FindStudentResponseDto[] {
		return "All students";
	}

	@Get("/:studentId")
	getStudentById(
		@Param("studentId") studentId: string
	): FindStudentResponseDto {
		return `get student with the id of ${studentId}`;
	}

	@Post()
	createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
		return `create student with the following data ${JSON.stringify(body)}`;
	}

	@Put("/:studentId")
	updateStudent(
		@Param("studentId") studentId: string,
		@Body() body: UpdateStudentDto
	): StudentResponseDto {
		return `Update Student with id of ${studentId} with data of ${JSON.stringify(
			body
		)}`;
	}
}
