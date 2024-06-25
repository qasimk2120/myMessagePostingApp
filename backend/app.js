const express = require("express");
const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fadf1234211",
      title: "1st server side pose",
      content: "This is 1st server post",
    },
    {
        id: "fdsaddasdsdsadd",
        title: "2nd server side post",
        content: "This is 2nd  server post",
      },
  ];
  res.status(200).json({message: 'Post fetched Successfully', posts: posts});
});

module.exports = app;
