const router = require("express").Router();
const Purchase = require("../models/Purchase");



//CREATE  ----------------------------------------------------

router.post("/", async (req, res) => {
  const newPurchase = new Purchase(req.body);
  try {
    const savedPurchase = await newPurchase.save();
    res.status(200).json(savedPurchase);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE ---------------------------------------------------------------------

router.put("/:id", async (req, res) => {
  try {
    const purchase = awaitPurchase.findById(req.params.id);
    if (purchase.username === req.body.username) {
      try {
        const updatedPurchase= awaitPurchase.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatePurchase);
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

//DELETE -------------------------------------------------------------

router.delete("/:id", async (req, res) => {
  try {
    const purchase = await Purchase.findById(req.params.id);
    if (purchase.username === req.body.username) {
      try {
        await purchase.delete();
        res.status(200).json("Post has been deleted...");
      } 
      catch (err) {
        res.status(500).json(err);
      }
    } 
    else {
      res.status(401).json("You can delete only your post!");
    }
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//GET  ---------------------------------------------------------------------

router.get("/:id", async (req, res) => {
  try {
    const purchase = await Purchase.findById(req.params.id);
    res.status(200).json(purchase);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL ---------------------------------------------------------

router.get("/", async (req, res) => {
  try {
    const purchase = await Purchase.find();
    res.status(200).json(purchase);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;