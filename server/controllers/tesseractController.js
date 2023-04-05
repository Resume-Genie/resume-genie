const express = require('express');
const fs = require('fs');
const multer = require('multer');
const { TesseractWorker } = require('tesseract.js');

const app = express();
// const worker = new TesseractWorker();

const storage = multer.diskStorage({
  destination: (reg, file, cb) => {
    cb(null, './uploads');
  },

  filename: (req, res, cb) => {
    cb(null, reg.file);
  },
});

const upload = multer({ storage: storage }).single('resume');

async function uploadFile(req, res) {
  upload(req, res, (err) => {
    // if (err) {
    //   return res.status(501).json({ error: err });
    // }

    // return res.json({ originalname: req.file.originalname, uploadname: req.file.filename });

    console.log('req.file');
    console.log(req.body);

    return res.status(200).json({ message: 'File uploaded successfully' });
  });
}

module.exports = { uploadFile };
