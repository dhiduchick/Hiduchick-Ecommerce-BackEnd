const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const sTagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}]
    });

    if (!sTagData) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }

    res.status(200).json(sTagData);
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  /* req.body should look like this...
    {
      tag_name: "silver",
    }
  */
    try {
      const nTagData = await Tag.create(req.body);
      res.status(200).json(nTagData);
    } catch (err) {
      res.status(400).json(err);
    }

});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
    /* req.body should look like this...
    {
      tag_name: "platnum",
    }
  */
    try {
      const uTagData = await Tag.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      res.status(200).json(uTagData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const dTagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!dTagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(dTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
