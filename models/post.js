const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

class Post {
  constructor(){

  }
  static create(data){
    return prisma.post.create({
      data: {
        title: data.title,
        content: data.content
      }
    })
  }
}

module.exports = Post