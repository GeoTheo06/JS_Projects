import { Controller, Get, Param, Put } from "@nestjs/common";
import { FindTeacherResponseDto } from "./dto/teacher.dto";

@Controller("teachers")
export class teachersController {
	@Get()
	getTeachers(): FindTeacherResponseDto[] {
		return "get Teachers";
	}

	@Get("/:teacherId")
	getSingleTeacher(
		@Param("teacherId") teacherId: string
	): FindTeacherResponseDto {
		return `get teacher with the id of ${teacherId}`;
	}
}
