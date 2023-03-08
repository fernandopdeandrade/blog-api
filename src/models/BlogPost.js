/**
 * @param {sequelize('sequelize').Sequelize} Sequelize
 * @param {sequelize('sequelize').DataTypes} DataTypes
 */

module.exports = (Sequelize, DataTypes) => {
    const BlogPost = Sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    }, {
        tableName: 'blog_posts',
        timestamps: false,
        underscored: true,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }

    return BlogPost;
}
