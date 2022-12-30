import { Controller, Get, Param, Put } from "@nestjs/common";

@Controller("teachers")
export class teachersController {
	@Get()
	getTeachers() {
		return "get Teachers";
	}

	@Get("/:teacherId")
	getSingleTeacher(@Param("teacherId") teacherId: string) {
		return `get teacher with the id of ${teacherId}`;
	}
}
