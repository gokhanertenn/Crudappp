import fastify, {FastifyInstance,FastifyRequest, FastifyServerOptions} from "fastify"
import { PrismaClient,Categories } from "@prisma/client"
import  { userRoute } from './modules/categories/categories.route';



const prisma = new PrismaClient({log: ["error","info","warn","query"]})


declare module "fastify" {
  export interface FastifyInstance {
    authenticate: any ;
  }
}

const app = fastify({
  logger:true
})


app.register(userRoute);

app.listen({ port: 8080 }, (err, address) => {

 

    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })