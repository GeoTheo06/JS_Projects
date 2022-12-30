import { FindStudentResponseDto, StudentResponseDto } from "src/student/dto/student.dto";
export declare class studentsTeacherController {
    getStudents(teacherId: string): FindStudentResponseDto[];
    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto;
}
