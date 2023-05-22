import { Prisma } from "@prisma/client";
import prisma from "../../utils/prisma";
import { createCategoryInput } from "./categories.schema";

export async function createCategoryHandler(input:createCategoryInput) {
    
    const categories = await prisma.categories.create({
        data:input
    })
    return categories
}


export async function findUsers() {
    return prisma.categories.findMany({
        select:{
            id:true,
            name:true,
            picture:true
        }
    })
}

export async function updateCategoryHandler(categoryId: number, input: createCategoryInput) {
    try {
      const existingCategory = await prisma.categories.findUnique({
        where: { id: categoryId },
      });
  
      if (!existingCategory) {
        throw new Error('Category not found.');
      }
  
      const updatedCategory = await prisma.categories.update({
        where: { id: categoryId },
        data: input,
      });
  
      return updatedCategory;
    } catch (error) {
      throw new Error('An error occurred while updating the category.');
    }
  }

  export async function deleteCategoryHandler(categoryId: number) {
  
    const deletedCategory = await prisma.categories.delete({
      where: { id: categoryId },
    });
    
    try {
      return deletedCategory;
    }catch (error:any
    )
     {
      return {
        success: false,
        message: "An error occurred while deleting the category.",
        error: error.message,
      };
    }
  
  }