const express = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
  fileStorage
} = require("../controllers/posts");
const checkAuth = require("../middleware/check-auth");

// Importing the necessary modules and controllers.
const router = express.Router();

router.post("", checkAuth, fileStorage, createPost);

router.put("/:id", checkAuth, fileStorage, updatePost);

router.get("", getAllPosts);

router.get("/:id", getPost);

router.delete("/:id", checkAuth, deletePost);

module.exports = router;
