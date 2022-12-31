import { FindStudentResponseDto, StudentResponseDto } from "src/student/dto/student.dto";
import { StudentService } from "src/student/student.service";
export declare class studentsTeacherController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudents(teacherId: string): FindStudentResponseDto[];
    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto;
}
