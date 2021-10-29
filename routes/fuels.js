const router = require("express").Router();
const Fuel = require("../models/Fuel");

//CREATE  --------------------------------------------------------------

router.post("/", async (req, res) => {
  const newFuel = new Fuel(req.body);
  try {
    const savedFuel = await newFuel.save();
    res.status(200).json(savedFuel);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE -------------------------------------------------------------

router.put("/:id", async (req, res) => {
  try {
    const fuel = await Fuel.findById(req.params.id);
    if (fuel.username === req.body.username) {
      try {
        const updatedFuel = await Fuel.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedFuel);
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
    const fuel = await Fuel.findById(req.params.id);
    if (fuel.username === req.body.username) {
      try {
        await fuel.delete();
        res.status(200).json("Fuel has been deleted...");
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
    const fuel = await Fuel.findById(req.params.id);
    res.status(200).json(fuel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL  -0---------------------------------------------------

router.get("/", async (req, res) => {
  try {
    const fuel = await Fuel.find();
    res.status(200).json(fuel);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;