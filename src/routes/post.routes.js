const express = require('express');

const postRouter = express.Router();

const {
    createPostController,
    getAllPostsController,
    getByPostIdController,
    updatePostController,
    deletePostController,
    getAllPostsQueryController,
} = require('../controllers/Post.controllers');
const validateToken = require('../middlewares/validateToken');
const {
    validatePost,
    validatePostupdate,
} = require('../middlewares/validatePost');

postRouter.post('/',
    validatePost,
    validateToken, createPostController);
    
postRouter.get('/search?', validateToken, getAllPostsQueryController);

postRouter.get('/', validateToken, getAllPostsController);

postRouter.get('/:id', validateToken, getByPostIdController);

postRouter.put('/:id',
    validateToken,
    validatePostupdate, updatePostController);

postRouter.delete('/:id', validateToken, deletePostController);

module.exports = postRouter;
