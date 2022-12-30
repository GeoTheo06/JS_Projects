import { Module } from "@nestjs/common";
import { StudentController } from "../student/student.controller";
import { studentsTeacherController } from "src/teacher/student.controller";
import { teachersController } from "src/teacher/teacher.controller";

@Module({
	imports: [],
	controllers: [teachersController, StudentController, studentsTeacherController],
})
export class AppModule {}
