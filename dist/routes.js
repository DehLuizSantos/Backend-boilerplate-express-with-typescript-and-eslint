"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const createCourseService_1 = __importDefault(require("./createCourseService"));
function createCourse(request, response) {
    createCourseService_1.default.execute({
        educator: 'Andre',
        name: 'NodeJS'
    });
    createCourseService_1.default.execute({
        educator: 'Diego',
        name: 'ReactJs'
    });
    return response.send();
}
exports.createCourse = createCourse;
