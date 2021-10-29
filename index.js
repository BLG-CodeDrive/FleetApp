const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require('cors')
dotenv.config();


mongoose
  .connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});


const authRoute = require("./middleware/auth");
const userRoute = require("./routes/users");
const vehicleRoute = require("./routes/vehicles");
const fuelRoute = require("./routes/fuels");
const purchaseRoute = require("./routes/purchases");
const goodsRoute = require("./routes/goodss");
const assetRoute = require("./routes/assets");
const ifuelRoute = require("./routes/ifuels");
//const vehiclemoveRoute = require("./routes/vehiclemoves");
const saleRoute = require("./routes/sales");
//const categoryRoute = require("./routes/categories");
const uploadImage = require('./middleware/uploadImage')
const uploadCtrl = require('./controllers/uploadCtrl')


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/vehicles", vehicleRoute);
app.use("/api/fuels", fuelRoute);
app.use("/api/purchases", purchaseRoute);
app.use("/api/goodss", goodsRoute);
app.use("/api/assets", assetRoute);
app.use("/api/ifuels", ifuelRoute);
//app.use("/api/vehiclemoves", vehiclemoveRoute);
app.use("/api/sales", saleRoute);
//app.use("/api/categories", categoryRoute);
app.use('/upload_avatar', uploadImage, uploadCtrl.uploadAvatar)
app.use(express.json());
app.use(cors())
app.use("/images", express.static(path.join(__dirname, "/images")));



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});