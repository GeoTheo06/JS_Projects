import { FindTeacherResponseDto } from "./dto/teacher.dto";
import { TeacherService } from "./teacher.service";
export declare class teachersController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    getTeachers(): FindTeacherResponseDto[];
    getTeacherById(teacherId: string): FindTeacherResponseDto;
}
