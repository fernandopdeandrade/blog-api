const { PostService, UserService } = require('../services');
const { auxAllCategories, auxAllPosts } = require('../aux/auxFunctions');
const { verifyToken } = require('../auth/authJwt');

const createPostController = async (req, res) => {
    try {
        const { title, content, categoryIds } = req.body;
        const categories = await auxAllCategories();
        const included = await categoryIds.map((categoryId) => categories.includes(categoryId));
        const mapIds = await auxAllPosts();
        const includedId = await mapIds.includes(Number(categoryIds[0]));
        if (!included[1] || includedId) {
            return res.status(400).json({ message: 'one or more "categoryIds" not found' });
        }
        const { user: { data } } = req;
        const { id: userId } = await UserService.getByEmail(data);
        const result = await PostService.createPostService(title, content, userId, categoryIds);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(201).json({ message: 'one or more "categoryIds" not found' });
    }
};

const getAllPostsController = async (req, res) => {
    const result = await PostService.getAllPostsService();
    return res.status(200).json(result);
};

const getAllPostsQueryController = async (req, res) => {
    const { q } = req.query;
    try {
        const allPosts = await PostService.getAllPostsService();
        const postTitle = await allPosts.filter((post) => post.title.includes(q));
        const postContent = await allPosts.filter((post) => post.content.includes(q));
        return res.status(200).json([...postTitle, ...postContent]);
    } catch (error) {
        return res.status(404).json([]);
    }
};

const getByPostIdController = async (req, res) => {
    const { id } = req.params;
    const allPosts = await PostService.getAllPostsService();
    const posts = await allPosts.map((post) => post.id);
    const included = await posts.includes(Number(id));

    if (!included) {
        return res.status(404).json({ message: 'Post does not exist' });
    }

    const result = await PostService.getByPostIdService(id);
    return res.status(200).json(result);
};

const updatePostController = async (req, res) => {
    const { user: { data } } = req;
    const { id } = req.params;
    const { title, content } = req.body;
    const allPosts = await PostService.getAllPostsService();
    const posts = await allPosts.map((post) => post.id);
    const included = await posts.includes(Number(id));

    if (!included) {
        return res.status(404).json({ message: 'Post does not exist' });
    }

    const { id: userId } = await UserService.getByEmail(data);
    const post = await PostService.getByPostIdService(id);

    if (post.userId !== userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }

    await PostService.updatePostService(id, title, content);
    const result = await PostService.getByPostIdService(id);
    return res.status(200).json(result);
};

const deletePostController = async (req, res) => {
    const { authorization: token } = req.headers;
    const { id } = req.params;
    const decoded = await verifyToken(token);
    const post = await PostService.getByPostIdService(id);

    if (post === null) {
        return res.status(404).json({ message: 'Post does not exist' });
    }

    const getPostId = await PostService.getByPostIdService(id);
    const { dataValues: { user: { dataValues: { email } } } } = getPostId;

    if (email !== decoded.data) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }

    await PostService.deletePostService(id);
    return res.status(204).json();
};

module.exports = {
    createPostController,
    getAllPostsController,
    getByPostIdController,
    updatePostController,
    deletePostController,
    getAllPostsQueryController,
};
