"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const student_controller_1 = require("../student/student.controller");
const student_controller_2 = require("../teacher/student.controller");
const teacher_controller_1 = require("../teacher/teacher.controller");
const student_service_1 = require("../student/student.service");
const teacher_service_1 = require("../teacher/teacher.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            teacher_controller_1.teachersController,
            student_controller_1.StudentController,
            student_controller_2.studentsTeacherController,
        ],
        providers: [student_service_1.StudentService, teacher_service_1.TeacherService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map