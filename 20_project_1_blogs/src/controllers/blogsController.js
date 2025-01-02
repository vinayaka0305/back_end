// const mongosse = require('mongoose');
const blogsSchema = require("../models/blogsSchema");

const createBlogs = async (req, res) => {
  try {
    const data = await new blogsSchema({
      title: req.body.title,
      description: req.body.description,
      user: req.id,
      comments: req.body.comments ? req.body.comments : [],
      created: req.created,
    });
    const result = await data.save();
    console.log(result);
    res.status(201).json({
      status: "success",
      message: "created new blog",
      result,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      message: error.message,
    });
  }
};

const retrieveBlog = async (req, res) => {
  try {
    const result = await blogsSchema.find();
    res.status(200).json({
      status: "success",
      message: "fetched all blogs",
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
};

const deleteBlogsById = async (req, res) => {
  try {
    const data = await blogsSchema.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(401).json({
        status: "failed",
        messgage: "user not found",
      });
    } else {
      res.status(200).json({
        status: "success",
        messgage: "deleted blog",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      messgage: error.message,
    });
  }
};

const updateBlogsById = async (req, res) => {
  try {
    const data = await blogsSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) {
      return res.status(401).json({
        status: "failed",
        messgage: "user not found",
      });
    } else {
      res.status(200).json({
        status: "success",
        messgage: "updated the blog",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      messgage: error.message,
    });
  }
};

const updateBlogsComment = async (req, res) => {
  try {
    const data = await blogsSchema.findById(req.params.id);
    data.comments.push(req.body.comments);
    const updatedComments = await blogsSchema.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );
    res.status(200).json({
      status: "success",
      messgage: "comments updated successfully",
      updatedComments,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      messgage: error.message,
    });
  }
};

const updateBlogsByVotes = async (req, res) => {
  //here true means like, false means dislike we can use boolean value
  try {
    const result = await blogsSchema.findById(req.params.id);
    if (req.body.vote) {
      result.upvote++;
    } else {
      result.downvote++;
    }
    //after like or dislike we need to count how many upvote and dowmvote is there
    //here the has already liked if try tries to like another one time we need to avoid
    result.votes.push(req.id);
    const updatedByVote = await blogsSchema.findByIdAndUpdate(
      req.params.id,
      result,
      { new: true }
    );
    res.status(200).json({
      status: "success",
      messgage: "upvote/downvote updated successfully",
      updatedByVote,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      messgage: error.message,
    });
  }
};

module.exports = {
  createBlogs,
  retrieveBlog,
  deleteBlogsById,
  updateBlogsById,
  updateBlogsComment,
  updateBlogsByVotes,
};
