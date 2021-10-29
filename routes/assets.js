const router = require("express").Router();
const Asset = require("../models/Asset");

//CREATE  --------------------------------------------------------------

router.post("/", async (req, res) => {
  const newAsset = new Asset(req.body);
  try {
    const savedAsset = await newAsset.save();
    res.status(200).json(savedAsset);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE -------------------------------------------------------------

router.put("/:id", async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (asset.username === req.body.username) {
      try {
        const updatedAsset = await Asset.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedAsset);
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
    const asset = await Asset.findById(req.params.id);
    if (asset.username === req.body.username) {
      try {
        await asset.delete();
        res.status(200).json("Asset has been deleted...");
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
    const asset = await Asset.findById(req.params.id);
    res.status(200).json(asset);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL  -0---------------------------------------------------

router.get("/", async (req, res) => {
  try {
    const asset = await Asset.find();
    res.status(200).json(asset);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;