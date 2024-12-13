const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images");
        cb(null, path.join(__dirname, 'public/uploads')); // kadir
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(16, function (err, name) {
            const fn = name.toString('hex') + path.extname(file.originalname);
            cb(null, fn)
            cb(null, `${Date.now()}-${file.originalname}`); // kadir 
        })
    }
});

// ===== kadir =====

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded!' });
    }
    res.status(200).json({
        message: 'File uploaded successfully!',
        filePath: `/uploads/${req.file.filename}`, 
    });
});


const multerCloudinary = multer({ storage: storage });
module.exports = multerCloudinary;