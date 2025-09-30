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
exports.PropertyController = void 0;
const common_1 = require("@nestjs/common");
const createProperty_dto_1 = require("./dto/createProperty.dto");
let PropertyController = class PropertyController {
    findAll() {
        return "All Properties";
    }
    findOne(id, sort) {
        return id;
    }
    getObjectPassed(objeto) {
        return objeto;
    }
    findById(id, slug) {
        let sum = (Number.parseInt(id) + Number.parseInt(slug));
        return `id: ${id}, slug: ${slug}, sum: ${sum}`;
    }
    create(name) {
        return name;
    }
    createDto(body) {
        return body;
    }
    update(body) {
        return body;
    }
};
exports.PropertyController = PropertyController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("sort", common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(":id/:slug"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "getObjectPassed", null);
__decorate([
    (0, common_1.Get)("sum/:id/:slug"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)("/name"),
    (0, common_1.HttpCode)(202),
    __param(0, (0, common_1.Body)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(202),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: false, groups: ['create'] }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProperty_dto_1.CreatePropertyDto]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "createDto", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: false, groups: ['create'] }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProperty_dto_1.CreatePropertyDto]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "update", null);
exports.PropertyController = PropertyController = __decorate([
    (0, common_1.Controller)('property')
], PropertyController);
//# sourceMappingURL=property.controller.js.map