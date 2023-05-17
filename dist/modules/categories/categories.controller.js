"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryController = exports.updateCategoryController = exports.getCategoriesHandler = exports.registerUserHandler = void 0;
const client_1 = require("@prisma/client");
const categories_service_1 = require("./categories.service");
const prisma = new client_1.PrismaClient({ log: ['error', 'info', 'warn', 'query'] });
function registerUserHandler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = request.body;
        try {
            const category = yield (0, categories_service_1.createCategoryHandler)(body);
            return reply.code(201).send(category);
        }
        catch (e) {
            console.log(e);
            return reply.code(500).send(e);
        }
    });
}
exports.registerUserHandler = registerUserHandler;
function getCategoriesHandler() {
    return __awaiter(this, void 0, void 0, function* () {
        const gets = yield (0, categories_service_1.findUsers)();
        return gets;
    });
}
exports.getCategoriesHandler = getCategoriesHandler;
function updateCategoryController(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const categoryId = parseInt(request.params.categoryId, 10);
        const input = request.body;
        try {
            const updatedCategory = yield (0, categories_service_1.updateCategoryHandler)(categoryId, input);
            return reply.code(200).send(updatedCategory);
        }
        catch (error) {
            console.log(error);
            return reply.code(500).send({ message: 'Kategori güncellenirken bir hata oluştu.' });
        }
    });
}
exports.updateCategoryController = updateCategoryController;
function deleteCategoryController(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const categoryId = parseInt(request.params.categoryId, 10);
        const input = request.body;
        try {
            yield (0, categories_service_1.deleteCategoryHandler)(categoryId);
            return reply.code(204).send();
        }
        catch (error) {
            console.log(error);
            return reply.code(500).send({ message: 'Kategori silinirken bir hata oluştu.' });
        }
    });
}
exports.deleteCategoryController = deleteCategoryController;
//# sourceMappingURL=categories.controller.js.map