const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const sCategoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!sCategoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(sCategoryData);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);

  }
});

router.post('/', async (req, res) => {
  // create a new category
  /* req.body should look like this...
  {
    category_name: "Underwear",
  }
*/
  try {
    const nCategoryData = await Category.create(req.body);
    res.status(200).json(nCategoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
    /* req.body should look like this...
  {
    category_name: "Undergarments",
  }
*/
  try {
    const uCategoryData = await Category.update(
      {
        category_name: req.body.category_name
      },
      {where: {
        id:req.params.id
      },
    },
    )
    res.status(200).json(uCategoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const dCategoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!dCategoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(dCategoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});


module.exports = router;
