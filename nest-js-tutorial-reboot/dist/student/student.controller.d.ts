import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from "./dto/student.dto";
import { StudentService } from "./student.service";
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudents(): FindStudentResponseDto[];
    getStudentById(studentId: string): FindStudentResponseDto;
    createStudent(body: CreateStudentDto): StudentResponseDto;
    updateStudent(studentId: string, body: UpdateStudentDto): StudentResponseDto;
}
