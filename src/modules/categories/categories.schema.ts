import {z} from "zod";


const createCategorySchema = z.object({
    
    id:z.number(),
    name:z.string(),
    picture: z.string(),
    
})


export type createCategoryInput = z.infer<typeof createCategorySchema>