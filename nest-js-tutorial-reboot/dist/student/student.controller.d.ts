import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from "./dto/student.dto";
export declare class StudentController {
    getStudents(): FindStudentResponseDto[];
    getStudentById(studentId: string): FindStudentResponseDto;
    createStudent(body: CreateStudentDto): StudentResponseDto;
    updateStudent(studentId: string, body: UpdateStudentDto): StudentResponseDto;
}
