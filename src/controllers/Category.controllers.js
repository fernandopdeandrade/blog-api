const { CategoryService } = require('../services');

const createCategoryController = async (req, res) => {
    const { name } = req.body;

    const allcategories = await CategoryService.getAllCategories();

    const categoryExists = await allcategories.find((category) => category.name === name);

    if (categoryExists) {
        return res.status(409).json({ message: 'Category already exists' });
    }

    const result = await CategoryService.createCategory(name);

    if (result === null) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    return res.status(201).json(result);
};

const getAllCategoriesController = async (_req, res) => {
    const result = await CategoryService.getAllCategories();

    if (result === null) {
        return res.status(400).json({ message: 'Invalid fields' });
    }

    return res.status(200).json(result);
};

module.exports = {
    createCategoryController,
    getAllCategoriesController,
};
