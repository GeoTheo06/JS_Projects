import { FindTeacherResponseDto } from "./dto/teacher.dto";
export declare class teachersController {
    getTeachers(): FindTeacherResponseDto[];
    getSingleTeacher(teacherId: string): FindTeacherResponseDto;
}
