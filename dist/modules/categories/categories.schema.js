"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createCategorySchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    picture: zod_1.z.string(),
});
//# sourceMappingURL=categories.schema.js.map