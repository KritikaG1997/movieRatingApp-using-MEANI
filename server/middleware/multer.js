const multer = require("multer");
const path = require("path");

// destination function to store employee profile picture
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
       
        cb(null, path.join('upload'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

// function for check file type.
const uploadFile = (req, file, cb) => {

    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

module.exports = multer({ storage: fileStorage, fileFilter: uploadFile });