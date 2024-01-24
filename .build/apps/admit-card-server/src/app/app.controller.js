"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var api_constants_1 = require("./api-constants/api-constants");
var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    AppController.prototype.getStudentData = function (studentdata) {
        console.log("studentdata", studentdata);
        try {
            return this.appService.getAdmitCard(studentdata);
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException(e, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };
    AppController.prototype.uploadExcelData = function (excelJson) {
        console.log("Input body:", excelJson);
        try {
            return this.appService.uploadExcel(excelJson);
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException(e, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };
    __decorate([
        common_1.Post(api_constants_1.default.getStudentData),
        __param(0, common_1.Body())
    ], AppController.prototype, "getStudentData", null);
    __decorate([
        common_1.Post(api_constants_1.default.admitCardDataUpload),
        __param(0, common_1.Body())
    ], AppController.prototype, "uploadExcelData", null);
    AppController = __decorate([
        common_1.Controller()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map