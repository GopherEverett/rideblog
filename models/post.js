const mongoose = require('./connection.js')

const PostSchema = new mongoose.Schema({
    title: String,
    author: String,
    date: String,
    body: String,
    votes: { type: Number, default: 0 }
})

const PostCollection = mongoose.model('Post', PostSchema)

const getAllPosts = () => {
    return PostCollection.find({})
}
const getSinglePost = (id) => {
    return PostCollection.findById(id)
}
const createPost = (newPost) => {
    return PostCollection.create(newPost)
}
const updatePost = (id, postData) => {
    return PostCollection.updateOne({_id: id}, postData)
}
const deletePost = (id) => {
    return PostCollection.deleteOne({_id: id})
}

module.exports = {
    getAllPosts,
    createPost,
    getSinglePost,
    updatePost,
    deletePost
}