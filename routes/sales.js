const router = require("express").Router();
const Sale = require("../models/Sale");

//CREATE  --------------------------------------------------------------

router.post("/", async (req, res) => {
  const newSale = new Sale(req.body);
  try {
    const savedSale= await newSale.save();
    res.status(200).json(savedSale);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE -------------------------------------------------------------

router.put("/:id", async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (sale.username === req.body.username) {
      try {
        const updatedSale = await Sale.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedSale);
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
    const sale = await Sale.findById(req.params.id);
    if (sale.username === req.body.username) {
      try {
        await sale.delete();
        res.status(200).json("sale has been deleted...");
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
    const sale = await Sale.findById(req.params.id);
    res.status(200).json(sale);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL  -0---------------------------------------------------

router.get("/", async (req, res) => {
  try {
    const sale = await Sale.find();
    res.status(200).json(sale);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;