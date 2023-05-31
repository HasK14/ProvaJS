const prisma = require("./prisma");

const findAllPosts = (userId) => {
  return prisma.post.findMany({
    where: {
      userId,
    },
  });
};

const savePost = (post, userId) => {
  return prisma.post.create({
    data: {
      text: post.text,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
};

module.exports = {
  findAllPosts,
  savePost,
};
