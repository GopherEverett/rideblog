const express = require('express')

const postApi = require('../models/post')

const postRouter = express.Router()

postRouter.get('/', (req, res) => {
    postApi.getAllPosts()
        .then((allPosts) => {
            res.json(allPosts)
        })
        .catch((err) => {
            res.send(err)
        })
})
postRouter.get('/:id', (req, res) => {
    postApi.getSinglePost(req.params.id)
        .then((singlePost) => {
            res.json(singlePost)
        })
        .catch((err) => {
            res.send(err)
        })
})
postRouter.post('/', (req, res) => {
    postApi.createPost(req.body)
    .then((createdPost) => {
        res.json(createdPost)
    })
})
postRouter.put('/:id', (req, res) => {
    postApi.updatePost(req.params.id, req.body, { new: true })
        .then((updatedpost) => {
            res.json(updatedpost)
        })
        .catch((err) => {
            res.json(err)
        })
})
postRouter.delete('/:id', (req, res) => {
    postApi.deletePost(req.params.id)
        .then((deletedPost) => {
            res.json(deletedPost)
        })
        .catch((err) => {
            res.json(err)
        })
})


module.exports = {
    postRouter
}