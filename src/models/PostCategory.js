/**
 * @param {sequelize('sequelize').Sequelize} Sequelize
 * @param {sequelize('sequelize').DataTypes} DataTypes
 */

module.exports = (Sequelize, DataTypes) => {
    const PostCategory = Sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            filed: 'post_id',
        },
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            filed: 'category_id',
        },
    },

        {
            timestamps: false,
            underscored: true,
            tableName: 'posts_categories',
        });

    PostCategory.associate = ({ BlogPost, Category }) => {
       BlogPost.belongsToMany(Category, { through: PostCategory, foreignKey: 'postId', otherKey: 'categoryId', as : 'categories'});
         Category.belongsToMany(BlogPost, { through: PostCategory, foreignKey: 'categoryId', otherKey: 'postId', as : 'posts' });
    }

    return PostCategory;
}
