import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from "./dto/student.dto";
export declare class StudentService {
    private students;
    getStudents(): FindStudentResponseDto[];
    getStudentById(StudentId: string): FindStudentResponseDto;
    createStudent(payload: CreateStudentDto): StudentResponseDto;
    updateStudent(payload: UpdateStudentDto, studentId: string): StudentResponseDto;
    getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[];
    updateStudentTeacher(teacherId: string, studentId: string): FindStudentResponseDto;
}
