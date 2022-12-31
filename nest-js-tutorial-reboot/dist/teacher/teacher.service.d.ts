import { FindTeacherResponseDto } from './dto/teacher.dto';
export declare class TeacherService {
    private teachers;
    getTeachers(): FindTeacherResponseDto[];
    getTeacherById(teacherId: string): FindTeacherResponseDto;
}
