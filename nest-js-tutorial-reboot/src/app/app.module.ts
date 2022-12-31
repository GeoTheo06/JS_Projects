import {
	MiddlewareConsumer,
	Module,
	NestModule,
	RequestMethod,
} from "@nestjs/common";
import { StudentController } from "../student/student.controller";
import { studentsTeacherController } from "src/teacher/student.controller";
import { teachersController } from "src/teacher/teacher.controller";
import { StudentService } from "src/student/student.service";
import { TeacherService } from "src/teacher/teacher.service";
import { ValidStudentMiddleware } from "src/common/middleware/validStudent.middleware";

@Module({
	imports: [],
	controllers: [
		teachersController,
		StudentController,
		studentsTeacherController,
	],
	providers: [StudentService, TeacherService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ValidStudentMiddleware).forRoutes({
			path: "students/:studentId",
			method: RequestMethod.GET,
		});
	}
}
