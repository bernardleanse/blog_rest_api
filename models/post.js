const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

class Post {
  constructor(){

  }

  static all(){
    return prisma.post.findMany()
  }

  static create(data){
    return prisma.post.create({
      data: {
        title: data.title,
        content: data.content
      }
    })
  }

  static update(data){
    return prisma.post.update({
      where: {
        id: parseInt(data.id)
      },
      data: {
        title: data.title,
        content: data.content
      }
    })
  }

  static delete(data){
    return prisma.post.delete({
      where: {
        id: parseInt(data.id)
      }
    })
  }
}

module.exports = Post