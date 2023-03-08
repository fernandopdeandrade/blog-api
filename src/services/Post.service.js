const Sequelize = require('sequelize');
const { BlogPost, Category, User, PostCategory } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const createPostService = async (title, content, userId, categoryIds) => {
    const result = await sequelize.transaction(async (t) => {
        const post = await BlogPost.create(
            {
                id: categoryIds[0],
                title,
                content,
                userId,
                published: new Date(),
                updated: new Date(),
            }, { transaction: t },
        );
        await PostCategory.create({
            postId: categoryIds[0], categoryId: categoryIds[1],
        }, { transaction: t });
        return post;
    });
    return result;
};

const getAllPostsService = async () => {
    const result = await BlogPost.findAll(
        {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'displayName', 'email', 'image'],
                },
                {
                    model: Category,
                    as: 'categories',
                    attributes: ['id', 'name'],
                    through: { attributes: [] },
                },
            ],
        },
    );
    return result;
};

const getByPostIdService = async (id) => {
    const result = await BlogPost.findByPk(id, {
        include: [
            {
                model: User,
                as: 'user',
                attributes: ['id', 'displayName', 'email', 'image'],
            },
            {
                model: Category,
                as: 'categories',
                attributes: ['id', 'name'],
                through: { attributes: [] },
            },
        ],
    });
    return result;
};

const updatePostService = async (id, title, content) => {
    const result = await sequelize.transaction(async (t) => {
        const post = await BlogPost.update(
            {
                title,
                content,
                updated: new Date(),
            },
            { where: { id } },
            { transaction: t },
        );
        return post;
    });
    return result;
};

const deletePostService = async (id) => {
    const result = await sequelize.transaction(async (t) => {
        const post = await BlogPost.destroy(
            { where: { id } },
            { transaction: t },
        );
        return post;
    });
    return result;
};

module.exports = {
    createPostService,
    getAllPostsService,
    getByPostIdService,
    updatePostService,
    deletePostService,
};
