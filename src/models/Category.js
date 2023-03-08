/**
 * @param {sequelize('sequelize').Sequelize} Sequelize
 * @param {sequelize('sequelize').DataTypes} DataTypes
 */

module.exports = (Sequelize, DataTypes) => {
    const Category = Sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: DataTypes.STRING,
    }, {
        tableName: 'categories',
        timestamps: false,
        underscored: true,
    });

    return Category;
}
