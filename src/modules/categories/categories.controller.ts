import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient, Categories } from '@prisma/client';
import { createCategoryHandler,findUsers,updateCategoryHandler,deleteCategoryHandler } from './categories.service';
import { createCategoryInput } from './categories.schema';




const prisma = new PrismaClient({ log: ['error', 'info', 'warn', 'query'] });



export async function registerUserHandler (
  request:FastifyRequest<{
    Body:createCategoryInput
  }>,
  reply:FastifyReply,
){

  const body = request.body

   try{
    const category = await createCategoryHandler(body)
    return reply.code(201).send(category)
   } catch (e) { 
    console.log(e);
    return reply.code(500).send(e)
   }

}

export async function getCategoriesHandler() {

const gets = await findUsers();

return gets

}


export async function updateCategoryController(
  request: FastifyRequest<{
    Params: { categoryId: string };
    Body: createCategoryInput;
  }>,
  reply: FastifyReply
) {
  const categoryId = parseInt(request.params.categoryId, 10);
  const input = request.body;

  try {
    const updatedCategory = await updateCategoryHandler(categoryId, input);
    return reply.code(200).send(updatedCategory);
  } catch (error) {
    console.log(error);
    return reply.code(500).send({ message: 'An error occurred while updating the category.' });
  }
}



export async function deleteCategoryController(
  request: FastifyRequest<{
    Params: { categoryId: string };
    Body: createCategoryInput
  }>,
  reply: FastifyReply
) {
  const categoryId = parseInt(request.params.categoryId, 10);
  const input = request.body
  try {
    await deleteCategoryHandler(categoryId);
    return reply.code(204).send();
  } catch (error) {
    console.log(error);
    return reply.code(500).send({ message: 'An error occurred while deleting the category.' });
  }
}












