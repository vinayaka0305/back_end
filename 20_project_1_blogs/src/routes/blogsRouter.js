const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const {
  createBlogs,
  retrieveBlog,
  deleteBlogsById,
  updateBlogsById,
  updateBlogsComment,
  updateBlogsByVotes
} = require("../controllers/blogsController");
const authorization = require("../middleware/authorization");
const voteAuthorization = require("../middleware/votesAuthorization");

router.post("/", isLoggedIn, createBlogs);
router.get("/",retrieveBlog);
router.delete("/:id", isLoggedIn, authorization, deleteBlogsById);
router.patch("/:id", isLoggedIn, authorization, updateBlogsById);
router.patch("/comments/:id", isLoggedIn, updateBlogsComment); 
router.patch("/vote/:id", isLoggedIn,voteAuthorization,updateBlogsByVotes); 
  
module.exports = router;
