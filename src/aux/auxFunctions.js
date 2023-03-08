const { CategoryService, PostService } = require('../services');

const auxAllCategories = async () => {
    const allCategories = await CategoryService.getAllCategories();
    const categories = await allCategories.map((category) => category.id);
    return categories;
};

const auxAllPosts = async () => {
    const allPosts = await PostService.getAllPostsService();
    const posts = await allPosts.map((post) => post.id);
    return posts;
};

module.exports = {
    auxAllCategories,
    auxAllPosts,
};
