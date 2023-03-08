/**
 * @param {sequelize('sequelize').Sequelize} Sequelize
 * @param {sequelize('sequelize').DataTypes} DataTypes
 */

module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        tableName: 'users',
        timestamps: false,
        underscored: true,
    });

    User.associate = (models) => {
        User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'user' });
    }

    return User;
};
