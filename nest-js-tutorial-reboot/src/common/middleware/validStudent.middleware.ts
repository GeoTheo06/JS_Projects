import { Injectable, NestMiddleware, HttpException } from "@nestjs/common";
import { Request, response, NextFunction } from "express";
import { students } from "../../database";
@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		const studentId = req.params.studentId;
		const studentExists = students.some((student) => {
			return student.id === studentId;
		});

		if (!studentExists) {
			throw new HttpException("student not found", 400);
		}
		next();
	}
}
