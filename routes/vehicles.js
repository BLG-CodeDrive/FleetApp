const router = require("express").Router();
const Vehicle = require("../models/Vehicle");


//CREATE 

router.post("/", async (req, res) => {
  const newVehicle = new Vehicle(req.body);
  try {
    const savedVehicle = await newVehicle.save();
    res.status(200).json(savedVehicle);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});


//UPDATE 

router.put("/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (vehicle.username === req.body.username) {
      try {
        const updatedVehicle = await Vehicle.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedVehicle);
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


//DELETE

router.delete("/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (vehicle.username === req.body.username) {
      try {
        await vehicle.delete();
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


//GET 

router.get("/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET ALL 


router.get("/", async (req, res) => {
  try {
    const vehicle = await Vehicle.find();
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(500).json(err);
  }
});


// all user post 

router.get("/", async (req, res) => {
  
  try {
    let vehicles;
    if (username) {
      vehicles = await Vehicle.find({ username });
    } else if (catName) {
      vehicles = await Vehicle.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      vehicles = await Vehicle.find();
    }
    res.status(200).json(posts);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;