const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const Post = require('../models/post')
const postRouter = express.Router()

postRouter.get('/', (req, res) => { // this should get posts
  Post.all()
  .then(data => res.status(200).json())
})

postRouter.post('/', (req, res) => {

  try {

    Post.create(req.body)
    .then(result => {
      res.status(201).json({ result })
    }) 

  } catch(err) {

    res.status(400).json({ error: err })

  }
})

postRouter.patch('/:id', (req, res) => {

  try{

    Post.update( { id: req.params.id , content: req.body.content, title: req.body.title } )
    .then(result => { 
      res.status(201).json({ result })
    })  

  } catch(error) {

    res.status(400).json({ error })

  }
})

postRouter.delete('/:id', (req, res) => {

  try {

    Post.delete( { id: req.params.id })
    .then(result => {
      res.status(201).json({ result })
    })

  } catch(error){

    res.status(400).json( { error } )

  }
})

module.exports = postRouter