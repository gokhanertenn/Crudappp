import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import {registerUserHandler,getCategoriesHandler, updateCategoryController, deleteCategoryController } from '../categories/categories.controller';



export async function userRoute(app: FastifyInstance) {
  app.post("/post",registerUserHandler);

 app.get("/get", getCategoriesHandler);

 app.put("/update/:categoryId" , updateCategoryController)

 app.delete("/delete/:categoryId" , deleteCategoryController )
 
}



