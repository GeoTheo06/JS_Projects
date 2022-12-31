import { Module } from "@nestjs/common";
import { StudentController } from "../student/student.controller";
import { studentsTeacherController } from "src/teacher/student.controller";
import { teachersController } from "src/teacher/teacher.controller";
import { StudentService } from "src/student/student.service";
import { TeacherService } from "src/teacher/teacher.service";

@Module({
	imports: [],
	controllers: [
		teachersController,
		StudentController,
		studentsTeacherController,
	],
	providers: [StudentService, TeacherService],
})
export class AppModule {}
