"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teachersController = void 0;
const common_1 = require("@nestjs/common");
const teacher_dto_1 = require("./dto/teacher.dto");
const teacher_service_1 = require("./teacher.service");
let teachersController = class teachersController {
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    getTeachers() {
        return this.teacherService.getTeachers();
    }
    getTeacherById(teacherId) {
        return this.teacherService.getTeacherById(teacherId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], teachersController.prototype, "getTeachers", null);
__decorate([
    (0, common_1.Get)("/:teacherId"),
    __param(0, (0, common_1.Param)("teacherId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", teacher_dto_1.FindTeacherResponseDto)
], teachersController.prototype, "getTeacherById", null);
teachersController = __decorate([
    (0, common_1.Controller)("teachers"),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService])
], teachersController);
exports.teachersController = teachersController;
//# sourceMappingURL=teacher.controller.js.map