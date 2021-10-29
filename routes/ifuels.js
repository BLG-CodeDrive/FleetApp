const router = require("express").Router();
const iFuel = require("../models/iFuel");

//CREATE  --------------------------------------------------------------

router.post("/", async (req, res) => {
  const newiFuel = new iFuel(req.body);
  try {
    const savediFuel = await newiFuel.save();
    res.status(200).json(savediFuel);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE -------------------------------------------------------------

router.put("/:id", async (req, res) => {
  try {
    const ifuel = await iFuel.findById(req.params.id);
    if (ifuel.username === req.body.username) {
      try {
        const updatediFuel = await iFuel.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatediFuel);
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
    const ifuel = await iFuel.findById(req.params.id);
    if (ifuel.username === req.body.username) {
      try {
        await ifuel.delete();
        res.status(200).json("inventory Fuel has been deleted...");
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
    const ifuel = await iFuel.findById(req.params.id);
    res.status(200).json(ifuel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL  -0---------------------------------------------------

router.get("/", async (req, res) => {
  try {
    const ifuel = await iFuel.find();
    res.status(200).json(ifuel);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;