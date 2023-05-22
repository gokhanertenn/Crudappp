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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryHandler = exports.updateCategoryHandler = exports.findUsers = exports.createCategoryHandler = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
function createCategoryHandler(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const categories = yield prisma_1.default.categories.create({
            data: input
        });
        return categories;
    });
}
exports.createCategoryHandler = createCategoryHandler;
function findUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma_1.default.categories.findMany({
            select: {
                id: true,
                name: true,
                picture: true
            }
        });
    });
}
exports.findUsers = findUsers;
function updateCategoryHandler(categoryId, input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const existingCategory = yield prisma_1.default.categories.findUnique({
                where: { id: categoryId },
            });
            if (!existingCategory) {
                throw new Error('Category not found.');
            }
            const updatedCategory = yield prisma_1.default.categories.update({
                where: { id: categoryId },
                data: input,
            });
            return updatedCategory;
        }
        catch (error) {
            throw new Error('An error occurred while updating the category.');
        }
    });
}
exports.updateCategoryHandler = updateCategoryHandler;
function deleteCategoryHandler(categoryId) {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedCategory = yield prisma_1.default.categories.delete({
            where: { id: categoryId },
        });
        try {
            return deletedCategory;
        }
        catch (error) {
            return {
                success: false,
                message: "An error occurred while deleting the category.",
                error: error.message,
            };
        }
    });
}
exports.deleteCategoryHandler = deleteCategoryHandler;
//# sourceMappingURL=categories.service.js.map