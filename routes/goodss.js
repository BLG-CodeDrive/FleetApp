const router = require("express").Router();
const Goods = require("../models/Goods");

//CREATE  --------------------------------------------------------------

router.post("/", async (req, res) => {
  const newGoods = new Goods(req.body);
  try {
    const savedGoods = await newGoods.save();
    res.status(200).json(savedGoods);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE -------------------------------------------------------------

router.put("/:id", async (req, res) => {
  try {
    const goods = await Goods.findById(req.params.id);
    if (goods.username === req.body.username) {
      try {
        const updatedGoods = await Goods.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedGoods);
      } 
      catch (err) {
        res.status(500).json(err);
      }
    } 
    else {
      res.status(401).json("You can update only your post!");
    }
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//DELETE ----------------------------------------------------------------------

router.delete("/:id", async (req, res) => {
  try {
    const goods = await Goods.findById(req.params.id);
    if (goods.username === req.body.username) {
      try {
        await goods.delete();
        res.status(200).json("Goods has been deleted...");
      } 
      catch (err) {
        res.status(500).json(err);
      }
    } 
    else {
      res.status(401).json("You can delete only yours!");
    }
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//GET ----------------------------------------------------------

router.get("/:id", async (req, res) => {
  try {
    const goods= await Goods.findById(req.params.id);
    res.status(200).json(goods);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL  -0---------------------------------------------------

router.get("/", async (req, res) => {
  try {
    const goods = await Goods.find();
    res.status(200).json(goods);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;