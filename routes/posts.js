const express = require('express')
const Post = require('../models/post')
const postRouter = express.Router()

postRouter.get('/', (req, res) => { // this should get posts
  Post.all()
  .then(data => res.status(200).json())
})

postRouter.post('/', (req, res) => {
  try {
    Post.create(req.body)
    .then((result) => {
      res.status(201).json({ result })
    }) 
  } catch(err) {
    res.status(400).json({ error: err })
  }
})

module.exports = postRouter