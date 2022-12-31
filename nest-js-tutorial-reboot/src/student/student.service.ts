import { Injectable } from "@nestjs/common";
import { students } from "src/database";
import { v4 as uuid } from "uuid";
import {
	CreateStudentDto,
	FindStudentResponseDto,
	StudentResponseDto,
	UpdateStudentDto,
} from "./dto/student.dto";

@Injectable()
export class StudentService {
	private students = students;

	getStudents(): FindStudentResponseDto[] {
		return this.students;
	}

	getStudentById(StudentId: string): FindStudentResponseDto {
		return this.students.find((student) => {
			return student.id === StudentId;
		});
	}

	createStudent(payload: CreateStudentDto): StudentResponseDto {
		let newStudent = {
			id: uuid(),
			...payload,
		};

		this.students.push(newStudent);

		return newStudent;
	}

	updateStudent(payload: UpdateStudentDto, studentId: string) {
		let updatedStudent: StudentResponseDto;
		const updatedStudentList = this.students.map((student) => {
			if (student.id === studentId) {
				updatedStudent = {
					id: studentId,
					...payload,
				};
				return updatedStudent;
			} else {
				return student;
			}
		});
		this.students = updatedStudentList;
		return updatedStudent;
	}

	getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[] {
		return this.students.filter((student) => {
			return student.teacher === teacherId;
		});
	}

	updateStudentTeacher(
		teacherId: string,
		studentId: string
	): FindStudentResponseDto {
		let updatedStudent: StudentResponseDto;
		const updatedStudentList = this.students.map((student) => {
			if (student.id === studentId) {
				updatedStudent = {
					...student,
					teacher: teacherId,
				};
				return updatedStudent;
			} else {
				return student;
			}
		});
		this.students = updatedStudentList;
		return updatedStudent;
	}
}
