import { Controller, Get, Put } from "@nestjs/common"

@Controller("teachers")
export class teachersController{
	@Get()
	getTeachers() {
		return "get Teachers"
	}

	@Get('/:teacherId')
	getSingleTeacher() {
		return "teacher info"
	}
}