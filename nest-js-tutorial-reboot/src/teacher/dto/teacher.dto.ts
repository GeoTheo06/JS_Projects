import { FindStudentResponseDto } from "src/student/dto/student.dto";

export class FindTeacherResponseDto {
	id: string;
	name: string;
}

export class studentsTeacherDto {
	name: string;
	id: string;
	students: FindStudentResponseDto;
}

export class updateStudentTeacherDto {
	teacherName: string;
	teacherId: string;
	studentName: string;
	studentId: string;
}
