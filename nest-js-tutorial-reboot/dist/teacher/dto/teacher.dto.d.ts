import { FindStudentResponseDto } from "src/student/dto/student.dto";
export declare class FindTeacherResponseDto {
    id: string;
    name: string;
}
export declare class studentsTeacherDto {
    name: string;
    id: string;
    students: FindStudentResponseDto;
}
export declare class updateStudentTeacherDto {
    teacherName: string;
    teacherId: string;
    studentName: string;
    studentId: string;
}
