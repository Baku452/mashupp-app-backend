const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const storage = new CloudinaryStorage({
    folder: "mashupapp",
    allowedFormats: ["jpg", "png"],
    transformation: [{
    width: 500,
    height: 500,
    crop: "limit"
    }],
    cloudinary: cloudinary
});
module.exports = multer({storage: storage});