"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("../database");
const uuid_1 = require("uuid");
let StudentService = class StudentService {
    constructor() {
        this.students = database_1.students;
    }
    getStudents() {
        return this.students;
    }
    getStudentById(StudentId) {
        return this.students.find((student) => {
            return student.id === StudentId;
        });
    }
    createStudent(payload) {
        let newStudent = Object.assign({ id: (0, uuid_1.v4)() }, payload);
        this.students.push(newStudent);
        return newStudent;
    }
    updateStudent(payload, studentId) {
        let updatedStudent;
        const updatedStudentList = this.students.map((student) => {
            if (student.id === studentId) {
                updatedStudent = Object.assign({ id: studentId }, payload);
                return updatedStudent;
            }
            else {
                return student;
            }
        });
        this.students = updatedStudentList;
        return updatedStudent;
    }
    getStudentsByTeacherId(teacherId) {
        return this.students.filter((student) => {
            return student.teacher === teacherId;
        });
    }
    updateStudentTeacher(teacherId, studentId) {
        let updatedStudent;
        const updatedStudentList = this.students.map((student) => {
            if (student.id === studentId) {
                updatedStudent = Object.assign(Object.assign({}, student), { teacher: teacherId });
                return updatedStudent;
            }
            else {
                return student;
            }
        });
        this.students = updatedStudentList;
        return updatedStudent;
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)()
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map